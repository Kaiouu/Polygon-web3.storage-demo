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
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ForumInterface extends ethers.utils.Interface {
  functions: {
    "addComment(uint256,string)": FunctionFragment;
    "addPost(string)": FunctionFragment;
    "getAuthorKarma(address)": FunctionFragment;
    "getItem(uint256)": FunctionFragment;
    "getItemScore(uint256)": FunctionFragment;
    "voteForItem(uint256,int8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addComment",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "addPost", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getAuthorKarma",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getItem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getItemScore",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "voteForItem",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addComment", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addPost", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAuthorKarma",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getItemScore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteForItem",
    data: BytesLike
  ): Result;

  events: {
    "NewItem(uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewItem"): EventFragment;
}

export type NewItemEvent = TypedEvent<
  [BigNumber, BigNumber, string] & {
    id: BigNumber;
    parentId: BigNumber;
    author: string;
  }
>;

export class Forum extends BaseContract {
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

  interface: ForumInterface;

  functions: {
    addComment(
      parentId: BigNumberish,
      contentCID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addPost(
      contentCID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAuthorKarma(
      author: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getItem(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          number,
          BigNumber,
          BigNumber,
          string,
          BigNumber,
          BigNumber[],
          string
        ] & {
          kind: number;
          id: BigNumber;
          parentId: BigNumber;
          author: string;
          createdAtBlock: BigNumber;
          childIds: BigNumber[];
          contentCID: string;
        }
      ]
    >;

    getItemScore(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    voteForItem(
      itemId: BigNumberish,
      voteValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addComment(
    parentId: BigNumberish,
    contentCID: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addPost(
    contentCID: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAuthorKarma(author: string, overrides?: CallOverrides): Promise<BigNumber>;

  getItem(
    itemId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber, BigNumber, string, BigNumber, BigNumber[], string] & {
      kind: number;
      id: BigNumber;
      parentId: BigNumber;
      author: string;
      createdAtBlock: BigNumber;
      childIds: BigNumber[];
      contentCID: string;
    }
  >;

  getItemScore(
    itemId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  voteForItem(
    itemId: BigNumberish,
    voteValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addComment(
      parentId: BigNumberish,
      contentCID: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addPost(contentCID: string, overrides?: CallOverrides): Promise<void>;

    getAuthorKarma(
      author: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getItem(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, string, BigNumber, BigNumber[], string] & {
        kind: number;
        id: BigNumber;
        parentId: BigNumber;
        author: string;
        createdAtBlock: BigNumber;
        childIds: BigNumber[];
        contentCID: string;
      }
    >;

    getItemScore(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    voteForItem(
      itemId: BigNumberish,
      voteValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NewItem(uint256,uint256,address)"(
      id?: BigNumberish | null,
      parentId?: BigNumberish | null,
      author?: string | null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string],
      { id: BigNumber; parentId: BigNumber; author: string }
    >;

    NewItem(
      id?: BigNumberish | null,
      parentId?: BigNumberish | null,
      author?: string | null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string],
      { id: BigNumber; parentId: BigNumber; author: string }
    >;
  };

  estimateGas: {
    addComment(
      parentId: BigNumberish,
      contentCID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addPost(
      contentCID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAuthorKarma(
      author: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getItem(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getItemScore(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    voteForItem(
      itemId: BigNumberish,
      voteValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addComment(
      parentId: BigNumberish,
      contentCID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addPost(
      contentCID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAuthorKarma(
      author: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getItem(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getItemScore(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    voteForItem(
      itemId: BigNumberish,
      voteValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}