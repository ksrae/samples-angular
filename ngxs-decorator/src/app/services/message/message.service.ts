import { Injectable } from "@angular/core";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";
import { Select } from "@ngxs/store";
import { ConnectWebSocket, SendWebSocketMessage } from "@ngxs/websocket-plugin";
import { Observable } from "rxjs";
import { Message, MessagesState } from "./message.state";

@Injectable({providedIn: 'root'})
export class MessageService {
  @Select(MessagesState.getMessage) messages$!: Observable<Message[]>;

  @Dispatch()
  connect(): ConnectWebSocket {
    return new ConnectWebSocket();
  }

  /**
   * It returns a new SendWebSocketMessage object.
   * @param {string} from - string - The name of the user sending the message
   * @param {string} message - The message to send.
   * @returns A new instance of SendWebSocketMessage
   */
  @Dispatch()
  sendMessage(from: string, message: string): SendWebSocketMessage {
    return new SendWebSocketMessage({
      type: 'message',
      from,
      message
    });

  }
}
