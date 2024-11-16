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
      T extends Prisma.AsssitantsAggregateArgs,
      TData = Prisma.GetAsssitantsAggregateType<T>,
    >(
      input: Prisma.Subset<T, Prisma.AsssitantsAggregateArgs>,
      opts?: UseTRPCQueryOptions<
        Prisma.GetAsssitantsAggregateType<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.AsssitantsAggregateArgs>(
      input: Omit<Prisma.Subset<T, Prisma.AsssitantsAggregateArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Prisma.GetAsssitantsAggregateType<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.GetAsssitantsAggregateType<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.AsssitantsAggregateArgs,
      TData = Prisma.GetAsssitantsAggregateType<T>,
    >(
      input: Prisma.Subset<T, Prisma.AsssitantsAggregateArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.GetAsssitantsAggregateType<T>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.AsssitantsAggregateArgs>(
      input: Omit<Prisma.Subset<T, Prisma.AsssitantsAggregateArgs>, "cursor">,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.GetAsssitantsAggregateType<T>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.GetAsssitantsAggregateType<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  createMany: {
    useMutation: <T extends Prisma.AsssitantsCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.AsssitantsCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.AsssitantsCreateManyArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.AsssitantsCreateManyArgs>(
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
    useMutation: <T extends Prisma.AsssitantsCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.AsssitantsCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.AsssitantsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.AsssitantsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.AsssitantsCreateArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.AsssitantsCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.AsssitantsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.AsssitantsGetPayload<T>>;
    };
  };
  deleteMany: {
    useMutation: <T extends Prisma.AsssitantsDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.AsssitantsDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.AsssitantsDeleteManyArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.AsssitantsDeleteManyArgs>(
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
    useMutation: <T extends Prisma.AsssitantsDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.AsssitantsDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.AsssitantsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.AsssitantsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.AsssitantsDeleteArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.AsssitantsDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.AsssitantsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.AsssitantsGetPayload<T>>;
    };
  };
  findFirst: {
    useQuery: <
      T extends Prisma.AsssitantsFindFirstArgs,
      TData = Prisma.AsssitantsGetPayload<T> | null,
    >(
      input?: Prisma.SelectSubset<T, Prisma.AsssitantsFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        Prisma.AsssitantsGetPayload<T> | null,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.AsssitantsFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.AsssitantsFindFirstArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Prisma.AsssitantsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.AsssitantsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.AsssitantsFindFirstArgs,
      TData = Prisma.AsssitantsGetPayload<T> | null,
    >(
      input?: Prisma.SelectSubset<T, Prisma.AsssitantsFindFirstArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.AsssitantsGetPayload<T> | null,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.AsssitantsFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.AsssitantsFindFirstArgs>,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.AsssitantsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.AsssitantsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findFirstOrThrow: {
    useQuery: <
      T extends Prisma.AsssitantsFindFirstOrThrowArgs,
      TData = Prisma.AsssitantsGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.AsssitantsFindFirstOrThrowArgs>,
      opts?: UseTRPCQueryOptions<Prisma.AsssitantsGetPayload<T>, TData, Error>,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.AsssitantsFindFirstOrThrowArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.AsssitantsFindFirstOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Prisma.AsssitantsGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.AsssitantsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.AsssitantsFindFirstOrThrowArgs,
      TData = Prisma.AsssitantsGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.AsssitantsFindFirstOrThrowArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.AsssitantsGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.AsssitantsFindFirstOrThrowArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.AsssitantsFindFirstOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.AsssitantsGetPayload<T>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.AsssitantsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findMany: {
    useQuery: <
      T extends Prisma.AsssitantsFindManyArgs,
      TData = Array<Prisma.AsssitantsGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.AsssitantsFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        Array<Prisma.AsssitantsGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.AsssitantsFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.AsssitantsFindManyArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Array<Prisma.AsssitantsGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.AsssitantsGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.AsssitantsFindManyArgs,
      TData = Array<Prisma.AsssitantsGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.AsssitantsFindManyArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Array<Prisma.AsssitantsGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.AsssitantsFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.AsssitantsFindManyArgs>,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Array<Prisma.AsssitantsGetPayload<T>>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Array<Prisma.AsssitantsGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findUnique: {
    useQuery: <
      T extends Prisma.AsssitantsFindUniqueArgs,
      TData = Prisma.AsssitantsGetPayload<T> | null,
    >(
      input: Prisma.SelectSubset<T, Prisma.AsssitantsFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        Prisma.AsssitantsGetPayload<T> | null,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.AsssitantsFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.AsssitantsFindUniqueArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Prisma.AsssitantsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.AsssitantsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.AsssitantsFindUniqueArgs,
      TData = Prisma.AsssitantsGetPayload<T> | null,
    >(
      input: Prisma.SelectSubset<T, Prisma.AsssitantsFindUniqueArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.AsssitantsGetPayload<T> | null,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.AsssitantsFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.AsssitantsFindUniqueArgs>,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.AsssitantsGetPayload<T> | null,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.AsssitantsGetPayload<T> | null,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  findUniqueOrThrow: {
    useQuery: <
      T extends Prisma.AsssitantsFindUniqueOrThrowArgs,
      TData = Prisma.AsssitantsGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.AsssitantsFindUniqueOrThrowArgs>,
      opts?: UseTRPCQueryOptions<Prisma.AsssitantsGetPayload<T>, TData, Error>,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.AsssitantsFindUniqueOrThrowArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.AsssitantsFindUniqueOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        Prisma.AsssitantsGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.AsssitantsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.AsssitantsFindUniqueOrThrowArgs,
      TData = Prisma.AsssitantsGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.AsssitantsFindUniqueOrThrowArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        Prisma.AsssitantsGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <
      T extends Prisma.AsssitantsFindUniqueOrThrowArgs,
    >(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.AsssitantsFindUniqueOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        Prisma.AsssitantsGetPayload<T>,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      Prisma.AsssitantsGetPayload<T>,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  groupBy: {
    useQuery: <
      T extends Prisma.AsssitantsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.AsssitantsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.AsssitantsGroupByArgs["orderBy"] },
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
        ? Prisma.GetAsssitantsGroupByPayload<T>
        : InputErrors,
    >(
      input: Prisma.SubsetIntersection<
        T,
        Prisma.AsssitantsGroupByArgs,
        OrderByArg
      > &
        InputErrors,
      opts?: UseTRPCQueryOptions<
        {} extends InputErrors
          ? Prisma.GetAsssitantsGroupByPayload<T>
          : InputErrors,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <
      T extends Prisma.AsssitantsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.AsssitantsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.AsssitantsGroupByArgs["orderBy"] },
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
        Prisma.SubsetIntersection<T, Prisma.AsssitantsGroupByArgs, OrderByArg> &
          InputErrors,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        {} extends InputErrors
          ? Prisma.GetAsssitantsGroupByPayload<T>
          : InputErrors,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      {} extends InputErrors
        ? Prisma.GetAsssitantsGroupByPayload<T>
        : InputErrors,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.AsssitantsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.AsssitantsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.AsssitantsGroupByArgs["orderBy"] },
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
        ? Prisma.GetAsssitantsGroupByPayload<T>
        : InputErrors,
    >(
      input: Prisma.SubsetIntersection<
        T,
        Prisma.AsssitantsGroupByArgs,
        OrderByArg
      > &
        InputErrors,
      opts?: UseTRPCSuspenseQueryOptions<
        {} extends InputErrors
          ? Prisma.GetAsssitantsGroupByPayload<T>
          : InputErrors,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <
      T extends Prisma.AsssitantsGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.AsssitantsGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.AsssitantsGroupByArgs["orderBy"] },
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
        Prisma.SubsetIntersection<T, Prisma.AsssitantsGroupByArgs, OrderByArg> &
          InputErrors,
        "cursor"
      >,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        {} extends InputErrors
          ? Prisma.GetAsssitantsGroupByPayload<T>
          : InputErrors,
        Error
      >,
    ) => UseTRPCSuspenseInfiniteQueryResult<
      {} extends InputErrors
        ? Prisma.GetAsssitantsGroupByPayload<T>
        : InputErrors,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
  updateMany: {
    useMutation: <T extends Prisma.AsssitantsUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.AsssitantsUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.AsssitantsUpdateManyArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.AsssitantsUpdateManyArgs>(
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
    useMutation: <T extends Prisma.AsssitantsUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.AsssitantsUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.AsssitantsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.AsssitantsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.AsssitantsUpdateArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.AsssitantsUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.AsssitantsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.AsssitantsGetPayload<T>>;
    };
  };
  upsert: {
    useMutation: <T extends Prisma.AsssitantsUpsertArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.AsssitantsUpsertArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.AsssitantsGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.AsssitantsGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.AsssitantsUpsertArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.AsssitantsUpsertArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.AsssitantsGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.AsssitantsGetPayload<T>>;
    };
  };
  count: {
    useQuery: <
      T extends Prisma.AsssitantsCountArgs,
      TData = "select" extends keyof T
        ? T["select"] extends true
          ? number
          : Prisma.GetScalarType<
              T["select"],
              Prisma.AsssitantsCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.AsssitantsCountArgs>,
      opts?: UseTRPCQueryOptions<
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.AsssitantsCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useInfiniteQuery: <T extends Prisma.AsssitantsCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.AsssitantsCountArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        T,
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.AsssitantsCountAggregateOutputType
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
              Prisma.AsssitantsCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
    useSuspenseQuery: <
      T extends Prisma.AsssitantsCountArgs,
      TData = "select" extends keyof T
        ? T["select"] extends true
          ? number
          : Prisma.GetScalarType<
              T["select"],
              Prisma.AsssitantsCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.AsssitantsCountArgs>,
      opts?: UseTRPCSuspenseQueryOptions<
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.AsssitantsCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
    useSuspenseInfiniteQuery: <T extends Prisma.AsssitantsCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.AsssitantsCountArgs>, "cursor">,
      opts?: UseTRPCSuspenseInfiniteQueryOptions<
        T,
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.AsssitantsCountAggregateOutputType
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
              Prisma.AsssitantsCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>,
      T
    >;
  };
}
