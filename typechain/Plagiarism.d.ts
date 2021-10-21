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

interface PlagiarismInterface extends ethers.utils.Interface {
  functions: {
    "c()": FunctionFragment;
    "code_similarity()": FunctionFragment;
    "d()": FunctionFragment;
    "e()": FunctionFragment;
    "eqn_count()": FunctionFragment;
    "eqn_map(uint256)": FunctionFragment;
    "eqn_sym(uint256,uint256)": FunctionFragment;
    "eqn_var(uint256,uint256)": FunctionFragment;
    "getSimilarity(string,string)": FunctionFragment;
    "st_count()": FunctionFragment;
    "st_map(uint256)": FunctionFragment;
    "uni_eqn_count()": FunctionFragment;
    "uni_st_count()": FunctionFragment;
    "var_name()": FunctionFragment;
    "var_ref(bytes32)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "c", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "code_similarity",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "d", values?: undefined): string;
  encodeFunctionData(functionFragment: "e", values?: undefined): string;
  encodeFunctionData(functionFragment: "eqn_count", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "eqn_map",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "eqn_sym",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "eqn_var",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSimilarity",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "st_count", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "st_map",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "uni_eqn_count",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "uni_st_count",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "var_name", values?: undefined): string;
  encodeFunctionData(functionFragment: "var_ref", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "c", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "code_similarity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "d", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "e", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eqn_count", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eqn_map", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eqn_sym", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eqn_var", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSimilarity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "st_count", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "st_map", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uni_eqn_count",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uni_st_count",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "var_name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "var_ref", data: BytesLike): Result;

  events: {};
}

export class Plagiarism extends Contract {
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

  interface: PlagiarismInterface;

  functions: {
    c(overrides?: CallOverrides): Promise<[string]>;

    "c()"(overrides?: CallOverrides): Promise<[string]>;

    code_similarity(overrides?: CallOverrides): Promise<[BigNumber]>;

    "code_similarity()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    d(overrides?: CallOverrides): Promise<[string]>;

    "d()"(overrides?: CallOverrides): Promise<[string]>;

    e(overrides?: CallOverrides): Promise<[boolean] & { status: boolean }>;

    "e()"(overrides?: CallOverrides): Promise<[boolean] & { status: boolean }>;

    eqn_count(overrides?: CallOverrides): Promise<[BigNumber]>;

    "eqn_count()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    eqn_map(arg0: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    "eqn_map(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    eqn_sym(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "eqn_sym(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    eqn_var(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "eqn_var(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSimilarity(
      new_code: string,
      unique_code: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "getSimilarity(string,string)"(
      new_code: string,
      unique_code: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    st_count(overrides?: CallOverrides): Promise<[BigNumber]>;

    "st_count()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    st_map(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, boolean, BigNumber] & {
        keyWord: BigNumber;
        paretnthesis: string;
        end_paretnthesis: string;
        status: boolean;
        total_var: BigNumber;
      }
    >;

    "st_map(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, boolean, BigNumber] & {
        keyWord: BigNumber;
        paretnthesis: string;
        end_paretnthesis: string;
        status: boolean;
        total_var: BigNumber;
      }
    >;

    uni_eqn_count(overrides?: CallOverrides): Promise<[BigNumber]>;

    "uni_eqn_count()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    uni_st_count(overrides?: CallOverrides): Promise<[BigNumber]>;

    "uni_st_count()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    var_name(overrides?: CallOverrides): Promise<[string]>;

    "var_name()"(overrides?: CallOverrides): Promise<[string]>;

    var_ref(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;

    "var_ref(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  c(overrides?: CallOverrides): Promise<string>;

  "c()"(overrides?: CallOverrides): Promise<string>;

  code_similarity(overrides?: CallOverrides): Promise<BigNumber>;

  "code_similarity()"(overrides?: CallOverrides): Promise<BigNumber>;

  d(overrides?: CallOverrides): Promise<string>;

  "d()"(overrides?: CallOverrides): Promise<string>;

  e(overrides?: CallOverrides): Promise<boolean>;

  "e()"(overrides?: CallOverrides): Promise<boolean>;

  eqn_count(overrides?: CallOverrides): Promise<BigNumber>;

  "eqn_count()"(overrides?: CallOverrides): Promise<BigNumber>;

  eqn_map(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  "eqn_map(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  eqn_sym(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "eqn_sym(uint256,uint256)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  eqn_var(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "eqn_var(uint256,uint256)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSimilarity(
    new_code: string,
    unique_code: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "getSimilarity(string,string)"(
    new_code: string,
    unique_code: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  st_count(overrides?: CallOverrides): Promise<BigNumber>;

  "st_count()"(overrides?: CallOverrides): Promise<BigNumber>;

  st_map(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, boolean, BigNumber] & {
      keyWord: BigNumber;
      paretnthesis: string;
      end_paretnthesis: string;
      status: boolean;
      total_var: BigNumber;
    }
  >;

  "st_map(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, boolean, BigNumber] & {
      keyWord: BigNumber;
      paretnthesis: string;
      end_paretnthesis: string;
      status: boolean;
      total_var: BigNumber;
    }
  >;

  uni_eqn_count(overrides?: CallOverrides): Promise<BigNumber>;

  "uni_eqn_count()"(overrides?: CallOverrides): Promise<BigNumber>;

  uni_st_count(overrides?: CallOverrides): Promise<BigNumber>;

  "uni_st_count()"(overrides?: CallOverrides): Promise<BigNumber>;

  var_name(overrides?: CallOverrides): Promise<string>;

  "var_name()"(overrides?: CallOverrides): Promise<string>;

  var_ref(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  "var_ref(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    c(overrides?: CallOverrides): Promise<string>;

    "c()"(overrides?: CallOverrides): Promise<string>;

    code_similarity(overrides?: CallOverrides): Promise<BigNumber>;

    "code_similarity()"(overrides?: CallOverrides): Promise<BigNumber>;

    d(overrides?: CallOverrides): Promise<string>;

    "d()"(overrides?: CallOverrides): Promise<string>;

    e(overrides?: CallOverrides): Promise<boolean>;

    "e()"(overrides?: CallOverrides): Promise<boolean>;

    eqn_count(overrides?: CallOverrides): Promise<BigNumber>;

    "eqn_count()"(overrides?: CallOverrides): Promise<BigNumber>;

    eqn_map(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    "eqn_map(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    eqn_sym(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "eqn_sym(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    eqn_var(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "eqn_var(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSimilarity(
      new_code: string,
      unique_code: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSimilarity(string,string)"(
      new_code: string,
      unique_code: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    st_count(overrides?: CallOverrides): Promise<BigNumber>;

    "st_count()"(overrides?: CallOverrides): Promise<BigNumber>;

    st_map(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, boolean, BigNumber] & {
        keyWord: BigNumber;
        paretnthesis: string;
        end_paretnthesis: string;
        status: boolean;
        total_var: BigNumber;
      }
    >;

    "st_map(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, boolean, BigNumber] & {
        keyWord: BigNumber;
        paretnthesis: string;
        end_paretnthesis: string;
        status: boolean;
        total_var: BigNumber;
      }
    >;

    uni_eqn_count(overrides?: CallOverrides): Promise<BigNumber>;

    "uni_eqn_count()"(overrides?: CallOverrides): Promise<BigNumber>;

    uni_st_count(overrides?: CallOverrides): Promise<BigNumber>;

    "uni_st_count()"(overrides?: CallOverrides): Promise<BigNumber>;

    var_name(overrides?: CallOverrides): Promise<string>;

    "var_name()"(overrides?: CallOverrides): Promise<string>;

    var_ref(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "var_ref(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    c(overrides?: CallOverrides): Promise<BigNumber>;

    "c()"(overrides?: CallOverrides): Promise<BigNumber>;

    code_similarity(overrides?: CallOverrides): Promise<BigNumber>;

    "code_similarity()"(overrides?: CallOverrides): Promise<BigNumber>;

    d(overrides?: CallOverrides): Promise<BigNumber>;

    "d()"(overrides?: CallOverrides): Promise<BigNumber>;

    e(overrides?: CallOverrides): Promise<BigNumber>;

    "e()"(overrides?: CallOverrides): Promise<BigNumber>;

    eqn_count(overrides?: CallOverrides): Promise<BigNumber>;

    "eqn_count()"(overrides?: CallOverrides): Promise<BigNumber>;

    eqn_map(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "eqn_map(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    eqn_sym(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "eqn_sym(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    eqn_var(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "eqn_var(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSimilarity(
      new_code: string,
      unique_code: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "getSimilarity(string,string)"(
      new_code: string,
      unique_code: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    st_count(overrides?: CallOverrides): Promise<BigNumber>;

    "st_count()"(overrides?: CallOverrides): Promise<BigNumber>;

    st_map(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "st_map(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uni_eqn_count(overrides?: CallOverrides): Promise<BigNumber>;

    "uni_eqn_count()"(overrides?: CallOverrides): Promise<BigNumber>;

    uni_st_count(overrides?: CallOverrides): Promise<BigNumber>;

    "uni_st_count()"(overrides?: CallOverrides): Promise<BigNumber>;

    var_name(overrides?: CallOverrides): Promise<BigNumber>;

    "var_name()"(overrides?: CallOverrides): Promise<BigNumber>;

    var_ref(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "var_ref(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "c()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    code_similarity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "code_similarity()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    d(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "d()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    e(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "e()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eqn_count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "eqn_count()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eqn_map(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "eqn_map(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    eqn_sym(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "eqn_sym(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    eqn_var(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "eqn_var(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSimilarity(
      new_code: string,
      unique_code: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "getSimilarity(string,string)"(
      new_code: string,
      unique_code: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    st_count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "st_count()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    st_map(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "st_map(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uni_eqn_count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "uni_eqn_count()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uni_st_count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "uni_st_count()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    var_name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "var_name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    var_ref(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "var_ref(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
