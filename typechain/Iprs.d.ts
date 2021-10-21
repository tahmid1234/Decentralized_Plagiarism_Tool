/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IprsInterface extends ethers.utils.Interface {
  functions: {
    "baz(uint256)": FunctionFragment;
    "createIPR(string,string,address)": FunctionFragment;
    "foo_value()": FunctionFragment;
    "getProudct(uint256)": FunctionFragment;
    "properties(uint256)": FunctionFragment;
    "propertyCount()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "baz", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "createIPR",
    values: [string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "foo_value", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getProudct",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "properties",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "propertyCount",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "baz", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createIPR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "foo_value", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getProudct", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "properties", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "propertyCount",
    data: BytesLike
  ): Result;

  events: {
    "NewProperty(uint256,string,string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewProperty"): EventFragment;
}

export class Iprs extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IprsInterface;

  functions: {
    baz(
      a: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "baz(uint256)"(
      a: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createIPR(
      author: string,
      property_type: string,
      author_account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createIPR(string,string,address)"(
      author: string,
      property_type: string,
      author_account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    foo_value(overrides?: CallOverrides): Promise<[BigNumber]>;

    "foo_value()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getProudct(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, string, string, string] & {
          id: BigNumber;
          property_type: string;
          author_name: string;
          author_address: string;
        }
      ]
    >;

    "getProudct(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, string, string, string] & {
          id: BigNumber;
          property_type: string;
          author_name: string;
          author_address: string;
        }
      ]
    >;

    properties(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string] & {
        id: BigNumber;
        property_type: string;
        author_name: string;
        author_address: string;
      }
    >;

    "properties(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string] & {
        id: BigNumber;
        property_type: string;
        author_name: string;
        author_address: string;
      }
    >;

    propertyCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "propertyCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  baz(
    a: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "baz(uint256)"(
    a: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createIPR(
    author: string,
    property_type: string,
    author_account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createIPR(string,string,address)"(
    author: string,
    property_type: string,
    author_account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  foo_value(overrides?: CallOverrides): Promise<BigNumber>;

  "foo_value()"(overrides?: CallOverrides): Promise<BigNumber>;

  getProudct(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string] & {
      id: BigNumber;
      property_type: string;
      author_name: string;
      author_address: string;
    }
  >;

  "getProudct(uint256)"(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string] & {
      id: BigNumber;
      property_type: string;
      author_name: string;
      author_address: string;
    }
  >;

  properties(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string] & {
      id: BigNumber;
      property_type: string;
      author_name: string;
      author_address: string;
    }
  >;

  "properties(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string] & {
      id: BigNumber;
      property_type: string;
      author_name: string;
      author_address: string;
    }
  >;

  propertyCount(overrides?: CallOverrides): Promise<BigNumber>;

  "propertyCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    baz(a: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "baz(uint256)"(a: BigNumberish, overrides?: CallOverrides): Promise<void>;

    createIPR(
      author: string,
      property_type: string,
      author_account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "createIPR(string,string,address)"(
      author: string,
      property_type: string,
      author_account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    foo_value(overrides?: CallOverrides): Promise<BigNumber>;

    "foo_value()"(overrides?: CallOverrides): Promise<BigNumber>;

    getProudct(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string] & {
        id: BigNumber;
        property_type: string;
        author_name: string;
        author_address: string;
      }
    >;

    "getProudct(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string] & {
        id: BigNumber;
        property_type: string;
        author_name: string;
        author_address: string;
      }
    >;

    properties(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string] & {
        id: BigNumber;
        property_type: string;
        author_name: string;
        author_address: string;
      }
    >;

    "properties(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string] & {
        id: BigNumber;
        property_type: string;
        author_name: string;
        author_address: string;
      }
    >;

    propertyCount(overrides?: CallOverrides): Promise<BigNumber>;

    "propertyCount()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    NewProperty(
      id: null,
      property_type: string | null,
      author_name: null,
      author_address: string | null
    ): TypedEventFilter<
      [BigNumber, string, string, string],
      {
        id: BigNumber;
        property_type: string;
        author_name: string;
        author_address: string;
      }
    >;
  };

  estimateGas: {
    baz(
      a: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "baz(uint256)"(
      a: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createIPR(
      author: string,
      property_type: string,
      author_account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createIPR(string,string,address)"(
      author: string,
      property_type: string,
      author_account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    foo_value(overrides?: CallOverrides): Promise<BigNumber>;

    "foo_value()"(overrides?: CallOverrides): Promise<BigNumber>;

    getProudct(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProudct(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    properties(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "properties(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    propertyCount(overrides?: CallOverrides): Promise<BigNumber>;

    "propertyCount()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    baz(
      a: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "baz(uint256)"(
      a: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createIPR(
      author: string,
      property_type: string,
      author_account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createIPR(string,string,address)"(
      author: string,
      property_type: string,
      author_account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    foo_value(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "foo_value()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProudct(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProudct(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    properties(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "properties(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    propertyCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "propertyCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
