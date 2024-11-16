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
      T extends Prisma.RunsAggregateArgs,
      TData = Prisma.GetRunsAggregateType<T>,
    >(
      input: Prisma.Subset<T, Prisma.RunsAggregateArgs>,
      opts?: UseTRPCQueryOptions<Prisma.GetRunsAggregateType<T>, TData, Error>,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.RunsAggregateArgs>(
      input: Omit<Prisma.Subset<T, Prisma.RunsAggregateArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Prisma.GetRunsAggregateType<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.GetRunsAggregateType<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.RunsAggregateArgs,
      TData = Prisma.GetRunsAggregateType<T>,
    >(
      input: Prisma.Subset<T, Prisma.RunsAggregateArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.GetRunsAggregateType<T>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.RunsAggregateArgs>(
      input: Omit<Prisma.Subset<T, Prisma.RunsAggregateArgs>, "cursor">,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.GetRunsAggregateType<T>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.GetRunsAggregateType<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  createMany: {
    useMutation: <T extends Prisma.RunsCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.RunsCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.RunsCreateManyArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.RunsCreateManyArgs>(
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
    useMutation: <T extends Prisma.RunsCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.RunsCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.RunsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.RunsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.RunsCreateArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.RunsCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.RunsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.RunsGetPayload<T>>;
    };
  };
  deleteMany: {
    useMutation: <T extends Prisma.RunsDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.RunsDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.RunsDeleteManyArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.RunsDeleteManyArgs>(
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
    useMutation: <T extends Prisma.RunsDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.RunsDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.RunsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.RunsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.RunsDeleteArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.RunsDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.RunsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.RunsGetPayload<T>>;
    };
  };
  findFirst: {
    useQuery: <
      T extends Prisma.RunsFindFirstArgs,
      TData = Prisma.RunsGetPayload<T> | null,
    >(
      input?: Prisma.SelectSubset<T, Prisma.RunsFindFirstArgs>,
      opts?: UseTRPCQueryOptions<Prisma.RunsGetPayload<T> | null, TData, Error>,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.RunsFindFirstArgs>(
      input?: Omit<Prisma.SelectSubset<T, Prisma.RunsFindFirstArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Prisma.RunsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.RunsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.RunsFindFirstArgs,
      TData = Prisma.RunsGetPayload<T> | null,
    >(
      input?: Prisma.SelectSubset<T, Prisma.RunsFindFirstArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.RunsGetPayload<T> | null,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.RunsFindFirstArgs>(
      input?: Omit<Prisma.SelectSubset<T, Prisma.RunsFindFirstArgs>, "cursor">,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.RunsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.RunsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findFirstOrThrow: {
    useQuery: <
      T extends Prisma.RunsFindFirstOrThrowArgs,
      TData = Prisma.RunsGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.RunsFindFirstOrThrowArgs>,
      opts?: UseTRPCQueryOptions<Prisma.RunsGetPayload<T>, TData, Error>,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.RunsFindFirstOrThrowArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.RunsFindFirstOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<T, Prisma.RunsGetPayload<T>, Error>,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.RunsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.RunsFindFirstOrThrowArgs,
      TData = Prisma.RunsGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.RunsFindFirstOrThrowArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.RunsGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.RunsFindFirstOrThrowArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.RunsFindFirstOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.RunsGetPayload<T>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.RunsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findMany: {
    useQuery: <
      T extends Prisma.RunsFindManyArgs,
      TData = Array<Prisma.RunsGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.RunsFindManyArgs>,
      opts?: UseTRPCQueryOptions<Array<Prisma.RunsGetPayload<T>>, TData, Error>,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.RunsFindManyArgs>(
      input?: Omit<Prisma.SelectSubset<T, Prisma.RunsFindManyArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Array<Prisma.RunsGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.RunsGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.RunsFindManyArgs,
      TData = Array<Prisma.RunsGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.RunsFindManyArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Array<Prisma.RunsGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.RunsFindManyArgs>(
      input?: Omit<Prisma.SelectSubset<T, Prisma.RunsFindManyArgs>, "cursor">,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Array<Prisma.RunsGetPayload<T>>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Array<Prisma.RunsGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findUnique: {
    useQuery: <
      T extends Prisma.RunsFindUniqueArgs,
      TData = Prisma.RunsGetPayload<T> | null,
    >(
      input: Prisma.SelectSubset<T, Prisma.RunsFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<Prisma.RunsGetPayload<T> | null, TData, Error>,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.RunsFindUniqueArgs>(
      input: Omit<Prisma.SelectSubset<T, Prisma.RunsFindUniqueArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Prisma.RunsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.RunsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.RunsFindUniqueArgs,
      TData = Prisma.RunsGetPayload<T> | null,
    >(
      input: Prisma.SelectSubset<T, Prisma.RunsFindUniqueArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.RunsGetPayload<T> | null,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.RunsFindUniqueArgs>(
      input: Omit<Prisma.SelectSubset<T, Prisma.RunsFindUniqueArgs>, "cursor">,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.RunsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.RunsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findUniqueOrThrow: {
    useQuery: <
      T extends Prisma.RunsFindUniqueOrThrowArgs,
      TData = Prisma.RunsGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.RunsFindUniqueOrThrowArgs>,
      opts?: UseTRPCQueryOptions<Prisma.RunsGetPayload<T>, TData, Error>,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.RunsFindUniqueOrThrowArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.RunsFindUniqueOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<T, Prisma.RunsGetPayload<T>, Error>,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.RunsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.RunsFindUniqueOrThrowArgs,
      TData = Prisma.RunsGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.RunsFindUniqueOrThrowArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.RunsGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.RunsFindUniqueOrThrowArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.RunsFindUniqueOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.RunsGetPayload<T>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.RunsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  groupBy: {
    useQuery: <
      T extends Prisma.RunsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.RunsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.RunsGroupByArgs["orderBy"] },
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
        ? Prisma.GetRunsGroupByPayload<T>
        : InputErrors,
    >(
      input: Prisma.SubsetIntersection<T, Prisma.RunsGroupByArgs, OrderByArg> &
        InputErrors,
      opts?: UseTRPCQueryOptions<
        {} extends InputErrors ? Prisma.GetRunsGroupByPayload<T> : InputErrors,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <
      T extends Prisma.RunsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.RunsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.RunsGroupByArgs["orderBy"] },
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
        Prisma.SubsetIntersection<T, Prisma.RunsGroupByArgs, OrderByArg> &
          InputErrors,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        {} extends InputErrors ? Prisma.GetRunsGroupByPayload<T> : InputErrors,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      {} extends InputErrors ? Prisma.GetRunsGroupByPayload<T> : InputErrors,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.RunsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.RunsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.RunsGroupByArgs["orderBy"] },
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
        ? Prisma.GetRunsGroupByPayload<T>
        : InputErrors,
    >(
      input: Prisma.SubsetIntersection<T, Prisma.RunsGroupByArgs, OrderByArg> &
        InputErrors,
      opts?: UseTRPCSuspenseQueryOptions<
        {} extends InputErrors ? Prisma.GetRunsGroupByPayload<T> : InputErrors,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <
      T extends Prisma.RunsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.RunsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.RunsGroupByArgs["orderBy"] },
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
        Prisma.SubsetIntersection<T, Prisma.RunsGroupByArgs, OrderByArg> &
          InputErrors,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        {} extends InputErrors ? Prisma.GetRunsGroupByPayload<T> : InputErrors,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      {} extends InputErrors ? Prisma.GetRunsGroupByPayload<T> : InputErrors,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  updateMany: {
    useMutation: <T extends Prisma.RunsUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.RunsUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.RunsUpdateManyArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.RunsUpdateManyArgs>(
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
    useMutation: <T extends Prisma.RunsUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.RunsUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.RunsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.RunsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.RunsUpdateArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.RunsUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.RunsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.RunsGetPayload<T>>;
    };
  };
  upsert: {
    useMutation: <T extends Prisma.RunsUpsertArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.RunsUpsertArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.RunsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.RunsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.RunsUpsertArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.RunsUpsertArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.RunsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.RunsGetPayload<T>>;
    };
  };
  count: {
    useQuery: <
      T extends Prisma.RunsCountArgs,
      TData = "select" extends keyof T
        ? T["select"] extends true
          ? number
          : Prisma.GetScalarType<
              T["select"],
              Prisma.RunsCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.RunsCountArgs>,
      opts?: UseTRPCQueryOptions<
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.RunsCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.RunsCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.RunsCountArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.RunsCountAggregateOutputType
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
              Prisma.RunsCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.RunsCountArgs,
      TData = "select" extends keyof T
        ? T["select"] extends true
          ? number
          : Prisma.GetScalarType<
              T["select"],
              Prisma.RunsCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.RunsCountArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.RunsCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.RunsCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.RunsCountArgs>, "cursor">,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.RunsCountAggregateOutputType
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
              Prisma.RunsCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
}
