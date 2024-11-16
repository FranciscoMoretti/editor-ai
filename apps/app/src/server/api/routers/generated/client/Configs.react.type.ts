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
      T extends Prisma.ConfigsAggregateArgs,
      TData = Prisma.GetConfigsAggregateType<T>,
    >(
      input: Prisma.Subset<T, Prisma.ConfigsAggregateArgs>,
      opts?: UseTRPCQueryOptions<
        Prisma.GetConfigsAggregateType<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.ConfigsAggregateArgs>(
      input: Omit<Prisma.Subset<T, Prisma.ConfigsAggregateArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Prisma.GetConfigsAggregateType<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.GetConfigsAggregateType<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.ConfigsAggregateArgs,
      TData = Prisma.GetConfigsAggregateType<T>,
    >(
      input: Prisma.Subset<T, Prisma.ConfigsAggregateArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.GetConfigsAggregateType<T>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.ConfigsAggregateArgs>(
      input: Omit<Prisma.Subset<T, Prisma.ConfigsAggregateArgs>, "cursor">,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.GetConfigsAggregateType<T>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.GetConfigsAggregateType<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  createMany: {
    useMutation: <T extends Prisma.ConfigsCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.ConfigsCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.ConfigsCreateManyArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.ConfigsCreateManyArgs>(
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
    useMutation: <T extends Prisma.ConfigsCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.ConfigsCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.ConfigsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.ConfigsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.ConfigsCreateArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.ConfigsCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.ConfigsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.ConfigsGetPayload<T>>;
    };
  };
  deleteMany: {
    useMutation: <T extends Prisma.ConfigsDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.ConfigsDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.ConfigsDeleteManyArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.ConfigsDeleteManyArgs>(
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
    useMutation: <T extends Prisma.ConfigsDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.ConfigsDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.ConfigsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.ConfigsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.ConfigsDeleteArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.ConfigsDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.ConfigsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.ConfigsGetPayload<T>>;
    };
  };
  findFirst: {
    useQuery: <
      T extends Prisma.ConfigsFindFirstArgs,
      TData = Prisma.ConfigsGetPayload<T> | null,
    >(
      input?: Prisma.SelectSubset<T, Prisma.ConfigsFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        Prisma.ConfigsGetPayload<T> | null,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.ConfigsFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.ConfigsFindFirstArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Prisma.ConfigsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.ConfigsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.ConfigsFindFirstArgs,
      TData = Prisma.ConfigsGetPayload<T> | null,
    >(
      input?: Prisma.SelectSubset<T, Prisma.ConfigsFindFirstArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.ConfigsGetPayload<T> | null,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.ConfigsFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.ConfigsFindFirstArgs>,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.ConfigsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.ConfigsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findFirstOrThrow: {
    useQuery: <
      T extends Prisma.ConfigsFindFirstOrThrowArgs,
      TData = Prisma.ConfigsGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.ConfigsFindFirstOrThrowArgs>,
      opts?: UseTRPCQueryOptions<Prisma.ConfigsGetPayload<T>, TData, Error>,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.ConfigsFindFirstOrThrowArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.ConfigsFindFirstOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<T, Prisma.ConfigsGetPayload<T>, Error>,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.ConfigsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.ConfigsFindFirstOrThrowArgs,
      TData = Prisma.ConfigsGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.ConfigsFindFirstOrThrowArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.ConfigsGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.ConfigsFindFirstOrThrowArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.ConfigsFindFirstOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.ConfigsGetPayload<T>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.ConfigsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findMany: {
    useQuery: <
      T extends Prisma.ConfigsFindManyArgs,
      TData = Array<Prisma.ConfigsGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.ConfigsFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        Array<Prisma.ConfigsGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.ConfigsFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.ConfigsFindManyArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Array<Prisma.ConfigsGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.ConfigsGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.ConfigsFindManyArgs,
      TData = Array<Prisma.ConfigsGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.ConfigsFindManyArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Array<Prisma.ConfigsGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.ConfigsFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.ConfigsFindManyArgs>,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Array<Prisma.ConfigsGetPayload<T>>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Array<Prisma.ConfigsGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findUnique: {
    useQuery: <
      T extends Prisma.ConfigsFindUniqueArgs,
      TData = Prisma.ConfigsGetPayload<T> | null,
    >(
      input: Prisma.SelectSubset<T, Prisma.ConfigsFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        Prisma.ConfigsGetPayload<T> | null,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.ConfigsFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.ConfigsFindUniqueArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Prisma.ConfigsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.ConfigsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.ConfigsFindUniqueArgs,
      TData = Prisma.ConfigsGetPayload<T> | null,
    >(
      input: Prisma.SelectSubset<T, Prisma.ConfigsFindUniqueArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.ConfigsGetPayload<T> | null,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.ConfigsFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.ConfigsFindUniqueArgs>,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.ConfigsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.ConfigsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findUniqueOrThrow: {
    useQuery: <
      T extends Prisma.ConfigsFindUniqueOrThrowArgs,
      TData = Prisma.ConfigsGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.ConfigsFindUniqueOrThrowArgs>,
      opts?: UseTRPCQueryOptions<Prisma.ConfigsGetPayload<T>, TData, Error>,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.ConfigsFindUniqueOrThrowArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.ConfigsFindUniqueOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<T, Prisma.ConfigsGetPayload<T>, Error>,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.ConfigsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.ConfigsFindUniqueOrThrowArgs,
      TData = Prisma.ConfigsGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.ConfigsFindUniqueOrThrowArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.ConfigsGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.ConfigsFindUniqueOrThrowArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.ConfigsFindUniqueOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.ConfigsGetPayload<T>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.ConfigsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  groupBy: {
    useQuery: <
      T extends Prisma.ConfigsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ConfigsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.ConfigsGroupByArgs["orderBy"] },
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
        ? Prisma.GetConfigsGroupByPayload<T>
        : InputErrors,
    >(
      input: Prisma.SubsetIntersection<
        T,
        Prisma.ConfigsGroupByArgs,
        OrderByArg
      > &
        InputErrors,
      opts?: UseTRPCQueryOptions<
        {} extends InputErrors
          ? Prisma.GetConfigsGroupByPayload<T>
          : InputErrors,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <
      T extends Prisma.ConfigsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ConfigsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.ConfigsGroupByArgs["orderBy"] },
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
        Prisma.SubsetIntersection<T, Prisma.ConfigsGroupByArgs, OrderByArg> &
          InputErrors,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        {} extends InputErrors
          ? Prisma.GetConfigsGroupByPayload<T>
          : InputErrors,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      {} extends InputErrors ? Prisma.GetConfigsGroupByPayload<T> : InputErrors,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.ConfigsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ConfigsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.ConfigsGroupByArgs["orderBy"] },
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
        ? Prisma.GetConfigsGroupByPayload<T>
        : InputErrors,
    >(
      input: Prisma.SubsetIntersection<
        T,
        Prisma.ConfigsGroupByArgs,
        OrderByArg
      > &
        InputErrors,
      opts?: UseTRPCSuspenseQueryOptions<
        {} extends InputErrors
          ? Prisma.GetConfigsGroupByPayload<T>
          : InputErrors,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <
      T extends Prisma.ConfigsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ConfigsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.ConfigsGroupByArgs["orderBy"] },
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
        Prisma.SubsetIntersection<T, Prisma.ConfigsGroupByArgs, OrderByArg> &
          InputErrors,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        {} extends InputErrors
          ? Prisma.GetConfigsGroupByPayload<T>
          : InputErrors,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      {} extends InputErrors ? Prisma.GetConfigsGroupByPayload<T> : InputErrors,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  updateMany: {
    useMutation: <T extends Prisma.ConfigsUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.ConfigsUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.ConfigsUpdateManyArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.ConfigsUpdateManyArgs>(
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
    useMutation: <T extends Prisma.ConfigsUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.ConfigsUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.ConfigsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.ConfigsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.ConfigsUpdateArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.ConfigsUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.ConfigsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.ConfigsGetPayload<T>>;
    };
  };
  upsert: {
    useMutation: <T extends Prisma.ConfigsUpsertArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.ConfigsUpsertArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.ConfigsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.ConfigsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.ConfigsUpsertArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.ConfigsUpsertArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.ConfigsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.ConfigsGetPayload<T>>;
    };
  };
  count: {
    useQuery: <
      T extends Prisma.ConfigsCountArgs,
      TData = "select" extends keyof T
        ? T["select"] extends true
          ? number
          : Prisma.GetScalarType<
              T["select"],
              Prisma.ConfigsCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.ConfigsCountArgs>,
      opts?: UseTRPCQueryOptions<
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.ConfigsCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.ConfigsCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.ConfigsCountArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.ConfigsCountAggregateOutputType
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
              Prisma.ConfigsCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.ConfigsCountArgs,
      TData = "select" extends keyof T
        ? T["select"] extends true
          ? number
          : Prisma.GetScalarType<
              T["select"],
              Prisma.ConfigsCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.ConfigsCountArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.ConfigsCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.ConfigsCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.ConfigsCountArgs>, "cursor">,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.ConfigsCountAggregateOutputType
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
              Prisma.ConfigsCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
}
