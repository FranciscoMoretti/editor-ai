/* eslint-disable */

import type { AnyTRPCRouter as AnyRouter } from '@trpc/server';
import type { CreateTRPCReactOptions } from '@trpc/react-query/shared';
import { type CreateTRPCReact, createTRPCReact as _createTRPCReact } from '@trpc/react-query';
import type { DeepOverrideAtPath } from './utils';
import { ClientType as PostsClientType } from "./Posts.react.type";
import { ClientType as UsersClientType } from "./Users.react.type";
import { ClientType as ThreadsClientType } from "./Threads.react.type";
import { ClientType as ConfigsClientType } from "./Configs.react.type";
import { ClientType as AsssitantClientType } from "./Asssitant.react.type";
import { ClientType as RunsClientType } from "./Runs.react.type";

export function createTRPCReact<
    TRouter extends AnyRouter,
    TPath extends string | undefined = undefined,
    TSSRContext = unknown
>(opts?: CreateTRPCReactOptions<TRouter>) {
    const r: CreateTRPCReact<TRouter, TSSRContext> = _createTRPCReact<TRouter, TSSRContext>(opts);
    return r as DeepOverrideAtPath<CreateTRPCReact<TRouter, TSSRContext>, ClientType<TRouter>, TPath>;
}

export interface ClientType<AppRouter extends AnyRouter> {
    posts: PostsClientType<AppRouter>;
    users: UsersClientType<AppRouter>;
    threads: ThreadsClientType<AppRouter>;
    configs: ConfigsClientType<AppRouter>;
    asssitant: AsssitantClientType<AppRouter>;
    runs: RunsClientType<AppRouter>;
}
