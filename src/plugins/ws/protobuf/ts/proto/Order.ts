// @generated by protobuf-ts 2.7.0 with parameter long_type_string
// @generated from protobuf file "proto/Order.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message Order
 */
export interface Order {
    /**
     * @generated from protobuf field: repeated Order.Body order = 1;
     */
    order: Order_Body[];
}
/**
 * @generated from protobuf message Order.Body
 */
export interface Order_Body {
    /**
     * @generated from protobuf field: sint64 uid = 1;
     */
    uid: string;
    /**
     * @generated from protobuf field: sint64 orderId = 2;
     */
    orderId: string;
    /**
     * @generated from protobuf field: int32 businessId = 3;
     */
    businessId: number;
    /**
     * @generated from protobuf field: int32 orderState = 4;
     */
    orderState: number;
    /**
     * @generated from protobuf field: int32 tradeId = 5;
     */
    tradeId: number;
    /**
     * @generated from protobuf field: string symbol = 6;
     */
    symbol: string;
    /**
     * @generated from protobuf field: string reason = 7;
     */
    reason: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Order$Type extends MessageType<Order> {
    constructor() {
        super("Order", [
            { no: 1, name: "order", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Order_Body }
        ]);
    }
    create(value?: PartialMessage<Order>): Order {
        const message = { order: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Order>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Order): Order {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated Order.Body order */ 1:
                    message.order.push(Order_Body.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Order, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated Order.Body order = 1; */
        for (let i = 0; i < message.order.length; i++)
            Order_Body.internalBinaryWrite(message.order[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Order
 */
export const Order = new Order$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Order_Body$Type extends MessageType<Order_Body> {
    constructor() {
        super("Order.Body", [
            { no: 1, name: "uid", kind: "scalar", T: 18 /*ScalarType.SINT64*/ },
            { no: 2, name: "orderId", kind: "scalar", T: 18 /*ScalarType.SINT64*/ },
            { no: 3, name: "businessId", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "orderState", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "tradeId", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "symbol", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "reason", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Order_Body>): Order_Body {
        const message = { uid: "0", orderId: "0", businessId: 0, orderState: 0, tradeId: 0, symbol: "", reason: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Order_Body>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Order_Body): Order_Body {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* sint64 uid */ 1:
                    message.uid = reader.sint64().toString();
                    break;
                case /* sint64 orderId */ 2:
                    message.orderId = reader.sint64().toString();
                    break;
                case /* int32 businessId */ 3:
                    message.businessId = reader.int32();
                    break;
                case /* int32 orderState */ 4:
                    message.orderState = reader.int32();
                    break;
                case /* int32 tradeId */ 5:
                    message.tradeId = reader.int32();
                    break;
                case /* string symbol */ 6:
                    message.symbol = reader.string();
                    break;
                case /* string reason */ 7:
                    message.reason = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Order_Body, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* sint64 uid = 1; */
        if (message.uid !== "0")
            writer.tag(1, WireType.Varint).sint64(message.uid);
        /* sint64 orderId = 2; */
        if (message.orderId !== "0")
            writer.tag(2, WireType.Varint).sint64(message.orderId);
        /* int32 businessId = 3; */
        if (message.businessId !== 0)
            writer.tag(3, WireType.Varint).int32(message.businessId);
        /* int32 orderState = 4; */
        if (message.orderState !== 0)
            writer.tag(4, WireType.Varint).int32(message.orderState);
        /* int32 tradeId = 5; */
        if (message.tradeId !== 0)
            writer.tag(5, WireType.Varint).int32(message.tradeId);
        /* string symbol = 6; */
        if (message.symbol !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.symbol);
        /* string reason = 7; */
        if (message.reason !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Order.Body
 */
export const Order_Body = new Order_Body$Type();
