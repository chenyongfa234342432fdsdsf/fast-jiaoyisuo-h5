// @generated by protobuf-ts 2.7.0 with parameter long_type_string
// @generated from protobuf file "proto/PerpetualIndexPrice.proto" (syntax proto3)
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
 * @generated from protobuf message PerpetualIndexPrice
 */
export interface PerpetualIndexPrice {
    /**
     * @generated from protobuf field: string symbolWassName = 1;
     */
    symbolWassName: string;
    /**
     * @generated from protobuf field: string indexPrice = 2;
     */
    indexPrice: string;
    /**
     * @generated from protobuf field: string markPrice = 3;
     */
    markPrice: string;
    /**
     * @generated from protobuf field: string assetFeeRate = 4;
     */
    assetFeeRate: string;
    /**
     * @generated from protobuf field: int64 time = 5;
     */
    time: string; // 时间}
// @generated message type with reflection information, may provide speed optimized methods
class PerpetualIndexPrice$Type extends MessageType<PerpetualIndexPrice> {
    constructor() {
        super("PerpetualIndexPrice", [
            { no: 1, name: "symbolWassName", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "indexPrice", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "markPrice", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "assetFeeRate", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "time", kind: "scalar", T: 3 /*ScalarType.INT64*/ }
        ]);
    }
    create(value?: PartialMessage<PerpetualIndexPrice>): PerpetualIndexPrice {
        const message = { symbolWassName: "", indexPrice: "", markPrice: "", assetFeeRate: "", time: "0" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PerpetualIndexPrice>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PerpetualIndexPrice): PerpetualIndexPrice {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string symbolWassName */ 1:
                    message.symbolWassName = reader.string();
                    break;
                case /* string indexPrice */ 2:
                    message.indexPrice = reader.string();
                    break;
                case /* string markPrice */ 3:
                    message.markPrice = reader.string();
                    break;
                case /* string assetFeeRate */ 4:
                    message.assetFeeRate = reader.string();
                    break;
                case /* int64 time */ 5:
                    message.time = reader.int64().toString();
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
    internalBinaryWrite(message: PerpetualIndexPrice, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string symbolWassName = 1; */
        if (message.symbolWassName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.symbolWassName);
        /* string indexPrice = 2; */
        if (message.indexPrice !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.indexPrice);
        /* string markPrice = 3; */
        if (message.markPrice !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.markPrice);
        /* string assetFeeRate = 4; */
        if (message.assetFeeRate !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.assetFeeRate);
        /* int64 time = 5; */
        if (message.time !== "0")
            writer.tag(5, WireType.Varint).int64(message.time);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PerpetualIndexPrice
 */
export const PerpetualIndexPrice = new PerpetualIndexPrice$Type();
