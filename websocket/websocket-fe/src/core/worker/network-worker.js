let _url = '';
let _ws;

onmessage = function(e) {
  switch(e.data.type) {
    // connecting to WebSocket
    case 'connect':
      _url = e.data.data;
      _ws = new WebSocket(_url);

      if(_ws.readyState === WebSocket.CONNECTING) {
        returnMessage('success', 'connected');
      } else {
        returnMessage('error', 'no connection', 1);
      }
      break;

    // return websocket readyState
    case 'state':
      returnMessage('success', _ws.readyState);
      break;

    // send message to server by websocket
    // if not ready, return error
    case 'send':
      if(!_url || _ws.readyState !== WebSocket.OPEN) {
        returnMessage('error', 'no connection', 1);
      }

      _ws.send(
        JSON.stringify({
          data: e.data.data
        }
      ));
      break;
  }


  // response from server
  _ws.onmessage = (e) => {
    const response = JSON.parse(e.data);
    returnMessage('success', response);
  }

  // websocket close
  _ws.onclose = (e) => {
    returnMessage('close', '', 999);
  }

  // console.log('Worker: Message received from main script', {e});
}

returnMessage = function(type, data, code = 0) {
  postMessage(
    {
      type,
      code,
      data
    });
}
