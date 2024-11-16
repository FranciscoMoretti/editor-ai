/* eslint-disable */
import type { Prisma } from "@zenstackhq/runtime/models";
import type { TRPCClientErrorLike, TRPCRequestOptions } from "@trpc/client";
import type {
  UseTRPCMutationOptions,
  UseTRPCMutationResult,
  UseTRPCQueryOptions,
  UseTRPCQueryResult,
  UseTRPCInfiniteQueryOptions,
  UseTRPCInfiniteQueryResult,
} from "@trpc/react-query/shared";
import type { AnyTRPCRouter as AnyRouter } from "@trpc/server";
import type {
  UseTRPCSuspenseQueryOptions,
  UseTRPCSuspenseQueryResult,
  UseTRPCSuspenseInfiniteQueryOptions,
  UseTRPCSuspenseInfiniteQueryResult,
} from "@trpc/react-query/shared";

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter["_def"]["_config"]["$types"]["ctx"],
> {
  aggregate: {
    useQuery: <
      T extends Prisma.PostsAggregateArgs,
      TData = Prisma.GetPostsAggregateType<T>,
    >(
      input: Prisma.Subset<T, Prisma.PostsAggregateArgs>,
      opts?: UseTRPCQueryOptions<Prisma.GetPostsAggregateType<T>, TData, Error>,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.PostsAggregateArgs>(
      input: Omit<Prisma.Subset<T, Prisma.PostsAggregateArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Prisma.GetPostsAggregateType<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.GetPostsAggregateType<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.PostsAggregateArgs,
      TData = Prisma.GetPostsAggregateType<T>,
    >(
      input: Prisma.Subset<T, Prisma.PostsAggregateArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.GetPostsAggregateType<T>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.PostsAggregateArgs>(
      input: Omit<Prisma.Subset<T, Prisma.PostsAggregateArgs>, "cursor">,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.GetPostsAggregateType<T>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.GetPostsAggregateType<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  createMany: {
    useMutation: <T extends Prisma.PostsCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PostsCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PostsCreateManyArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.PostsCreateManyArgs>(
        variables?: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>;
    };
  };
  create: {
    useMutation: <T extends Prisma.PostsCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PostsCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PostsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.PostsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PostsCreateArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.PostsCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.PostsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.PostsGetPayload<T>>;
    };
  };
  deleteMany: {
    useMutation: <T extends Prisma.PostsDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PostsDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PostsDeleteManyArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.PostsDeleteManyArgs>(
        variables?: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>;
    };
  };
  delete: {
    useMutation: <T extends Prisma.PostsDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PostsDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PostsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.PostsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PostsDeleteArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.PostsDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.PostsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.PostsGetPayload<T>>;
    };
  };
  findFirst: {
    useQuery: <
      T extends Prisma.PostsFindFirstArgs,
      TData = Prisma.PostsGetPayload<T> | null,
    >(
      input?: Prisma.SelectSubset<T, Prisma.PostsFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        Prisma.PostsGetPayload<T> | null,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.PostsFindFirstArgs>(
      input?: Omit<Prisma.SelectSubset<T, Prisma.PostsFindFirstArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Prisma.PostsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.PostsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.PostsFindFirstArgs,
      TData = Prisma.PostsGetPayload<T> | null,
    >(
      input?: Prisma.SelectSubset<T, Prisma.PostsFindFirstArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.PostsGetPayload<T> | null,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.PostsFindFirstArgs>(
      input?: Omit<Prisma.SelectSubset<T, Prisma.PostsFindFirstArgs>, "cursor">,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.PostsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.PostsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findFirstOrThrow: {
    useQuery: <
      T extends Prisma.PostsFindFirstOrThrowArgs,
      TData = Prisma.PostsGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.PostsFindFirstOrThrowArgs>,
      opts?: UseTRPCQueryOptions<Prisma.PostsGetPayload<T>, TData, Error>,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.PostsFindFirstOrThrowArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.PostsFindFirstOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<T, Prisma.PostsGetPayload<T>, Error>,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.PostsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.PostsFindFirstOrThrowArgs,
      TData = Prisma.PostsGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.PostsFindFirstOrThrowArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.PostsGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.PostsFindFirstOrThrowArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.PostsFindFirstOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.PostsGetPayload<T>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.PostsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findMany: {
    useQuery: <
      T extends Prisma.PostsFindManyArgs,
      TData = Array<Prisma.PostsGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.PostsFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        Array<Prisma.PostsGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.PostsFindManyArgs>(
      input?: Omit<Prisma.SelectSubset<T, Prisma.PostsFindManyArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Array<Prisma.PostsGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.PostsGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.PostsFindManyArgs,
      TData = Array<Prisma.PostsGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.PostsFindManyArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Array<Prisma.PostsGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.PostsFindManyArgs>(
      input?: Omit<Prisma.SelectSubset<T, Prisma.PostsFindManyArgs>, "cursor">,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Array<Prisma.PostsGetPayload<T>>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Array<Prisma.PostsGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findUnique: {
    useQuery: <
      T extends Prisma.PostsFindUniqueArgs,
      TData = Prisma.PostsGetPayload<T> | null,
    >(
      input: Prisma.SelectSubset<T, Prisma.PostsFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        Prisma.PostsGetPayload<T> | null,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.PostsFindUniqueArgs>(
      input: Omit<Prisma.SelectSubset<T, Prisma.PostsFindUniqueArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Prisma.PostsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.PostsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.PostsFindUniqueArgs,
      TData = Prisma.PostsGetPayload<T> | null,
    >(
      input: Prisma.SelectSubset<T, Prisma.PostsFindUniqueArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.PostsGetPayload<T> | null,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.PostsFindUniqueArgs>(
      input: Omit<Prisma.SelectSubset<T, Prisma.PostsFindUniqueArgs>, "cursor">,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.PostsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.PostsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findUniqueOrThrow: {
    useQuery: <
      T extends Prisma.PostsFindUniqueOrThrowArgs,
      TData = Prisma.PostsGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.PostsFindUniqueOrThrowArgs>,
      opts?: UseTRPCQueryOptions<Prisma.PostsGetPayload<T>, TData, Error>,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.PostsFindUniqueOrThrowArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.PostsFindUniqueOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<T, Prisma.PostsGetPayload<T>, Error>,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.PostsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.PostsFindUniqueOrThrowArgs,
      TData = Prisma.PostsGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.PostsFindUniqueOrThrowArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.PostsGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.PostsFindUniqueOrThrowArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.PostsFindUniqueOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.PostsGetPayload<T>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.PostsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  groupBy: {
    useQuery: <
      T extends Prisma.PostsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.PostsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.PostsGroupByArgs["orderBy"] },
      OrderFields extends Prisma.ExcludeUnderscoreKeys<
        Prisma.Keys<Prisma.MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends Prisma.MaybeTupleToUnion<T["by"]>,
      ByValid extends Prisma.Has<ByFields, OrderFields>,
      HavingFields extends Prisma.GetHavingFields<T["having"]>,
      HavingValid extends Prisma.Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? Prisma.True : Prisma.False,
      InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Prisma.Keys<T>
            ? "orderBy" extends Prisma.Keys<T>
              ? ByValid extends Prisma.True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Prisma.Keys<T>
              ? "orderBy" extends Prisma.Keys<T>
                ? ByValid extends Prisma.True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends Prisma.True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
      TData = {} extends InputErrors
        ? Prisma.GetPostsGroupByPayload<T>
        : InputErrors,
    >(
      input: Prisma.SubsetIntersection<T, Prisma.PostsGroupByArgs, OrderByArg> &
        InputErrors,
      opts?: UseTRPCQueryOptions<
        {} extends InputErrors ? Prisma.GetPostsGroupByPayload<T> : InputErrors,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <
      T extends Prisma.PostsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.PostsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.PostsGroupByArgs["orderBy"] },
      OrderFields extends Prisma.ExcludeUnderscoreKeys<
        Prisma.Keys<Prisma.MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends Prisma.MaybeTupleToUnion<T["by"]>,
      ByValid extends Prisma.Has<ByFields, OrderFields>,
      HavingFields extends Prisma.GetHavingFields<T["having"]>,
      HavingValid extends Prisma.Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? Prisma.True : Prisma.False,
      InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Prisma.Keys<T>
            ? "orderBy" extends Prisma.Keys<T>
              ? ByValid extends Prisma.True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Prisma.Keys<T>
              ? "orderBy" extends Prisma.Keys<T>
                ? ByValid extends Prisma.True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends Prisma.True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      input: Omit<
        Prisma.SubsetIntersection<T, Prisma.PostsGroupByArgs, OrderByArg> &
          InputErrors,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        {} extends InputErrors ? Prisma.GetPostsGroupByPayload<T> : InputErrors,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      {} extends InputErrors ? Prisma.GetPostsGroupByPayload<T> : InputErrors,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.PostsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.PostsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.PostsGroupByArgs["orderBy"] },
      OrderFields extends Prisma.ExcludeUnderscoreKeys<
        Prisma.Keys<Prisma.MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends Prisma.MaybeTupleToUnion<T["by"]>,
      ByValid extends Prisma.Has<ByFields, OrderFields>,
      HavingFields extends Prisma.GetHavingFields<T["having"]>,
      HavingValid extends Prisma.Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? Prisma.True : Prisma.False,
      InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Prisma.Keys<T>
            ? "orderBy" extends Prisma.Keys<T>
              ? ByValid extends Prisma.True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Prisma.Keys<T>
              ? "orderBy" extends Prisma.Keys<T>
                ? ByValid extends Prisma.True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends Prisma.True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
      TData = {} extends InputErrors
        ? Prisma.GetPostsGroupByPayload<T>
        : InputErrors,
    >(
      input: Prisma.SubsetIntersection<T, Prisma.PostsGroupByArgs, OrderByArg> &
        InputErrors,
      opts?: UseTRPCSuspenseQueryOptions<
        {} extends InputErrors ? Prisma.GetPostsGroupByPayload<T> : InputErrors,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <
      T extends Prisma.PostsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.PostsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.PostsGroupByArgs["orderBy"] },
      OrderFields extends Prisma.ExcludeUnderscoreKeys<
        Prisma.Keys<Prisma.MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends Prisma.MaybeTupleToUnion<T["by"]>,
      ByValid extends Prisma.Has<ByFields, OrderFields>,
      HavingFields extends Prisma.GetHavingFields<T["having"]>,
      HavingValid extends Prisma.Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? Prisma.True : Prisma.False,
      InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Prisma.Keys<T>
            ? "orderBy" extends Prisma.Keys<T>
              ? ByValid extends Prisma.True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Prisma.Keys<T>
              ? "orderBy" extends Prisma.Keys<T>
                ? ByValid extends Prisma.True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends Prisma.True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      input: Omit<
        Prisma.SubsetIntersection<T, Prisma.PostsGroupByArgs, OrderByArg> &
          InputErrors,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        {} extends InputErrors ? Prisma.GetPostsGroupByPayload<T> : InputErrors,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      {} extends InputErrors ? Prisma.GetPostsGroupByPayload<T> : InputErrors,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  updateMany: {
    useMutation: <T extends Prisma.PostsUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PostsUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PostsUpdateManyArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.PostsUpdateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>;
    };
  };
  update: {
    useMutation: <T extends Prisma.PostsUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PostsUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PostsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.PostsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PostsUpdateArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.PostsUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.PostsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.PostsGetPayload<T>>;
    };
  };
  upsert: {
    useMutation: <T extends Prisma.PostsUpsertArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PostsUpsertArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PostsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.PostsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PostsUpsertArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.PostsUpsertArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.PostsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.PostsGetPayload<T>>;
    };
  };
  count: {
    useQuery: <
      T extends Prisma.PostsCountArgs,
      TData = "select" extends keyof T
        ? T["select"] extends true
          ? number
          : Prisma.GetScalarType<
              T["select"],
              Prisma.PostsCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.PostsCountArgs>,
      opts?: UseTRPCQueryOptions<
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.PostsCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.PostsCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.PostsCountArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.PostsCountAggregateOutputType
              >
          : number,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      "select" extends keyof T
        ? T["select"] extends true
          ? number
          : Prisma.GetScalarType<
              T["select"],
              Prisma.PostsCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.PostsCountArgs,
      TData = "select" extends keyof T
        ? T["select"] extends true
          ? number
          : Prisma.GetScalarType<
              T["select"],
              Prisma.PostsCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.PostsCountArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.PostsCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.PostsCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.PostsCountArgs>, "cursor">,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.PostsCountAggregateOutputType
              >
          : number,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      "select" extends keyof T
        ? T["select"] extends true
          ? number
          : Prisma.GetScalarType<
              T["select"],
              Prisma.PostsCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
}
