-- CreateEnum
CREATE TYPE "public"."ThreadStatus" AS ENUM ('idle', 'busy', 'interrupted', 'error');

-- CreateEnum
CREATE TYPE "public"."RunStatus" AS ENUM ('pending', 'error', 'success', 'timeout', 'interrupted');

-- CreateEnum
CREATE TYPE "public"."MultitaskStrategy" AS ENUM ('reject', 'rollback', 'interrupt', 'enqueue');

-- CreateTable
CREATE TABLE "public"."threads" (
    "thread_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB NOT NULL,
    "status" "public"."ThreadStatus" NOT NULL,
    "values" JSONB NOT NULL,

    CONSTRAINT "threads_pkey" PRIMARY KEY ("thread_id")
);

-- CreateTable
CREATE TABLE "public"."configs" (
    "config_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "tags" TEXT[],
    "recursion_limit" INTEGER NOT NULL,
    "configurable" JSONB NOT NULL,

    CONSTRAINT "configs_pkey" PRIMARY KEY ("config_id")
);

-- CreateTable
CREATE TABLE "public"."asssitant" (
    "assistant_id" UUID NOT NULL,
    "graph_id" TEXT NOT NULL,
    "config_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB NOT NULL,
    "version" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "asssitant_pkey" PRIMARY KEY ("assistant_id")
);

-- CreateTable
CREATE TABLE "public"."runs" (
    "run_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "thread_id" UUID NOT NULL,
    "assistant_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "public"."RunStatus" NOT NULL,
    "metadata" JSONB NOT NULL,
    "kwargs" JSONB NOT NULL,
    "multitask_strategy" "public"."MultitaskStrategy" NOT NULL,

    CONSTRAINT "runs_pkey" PRIMARY KEY ("run_id")
);

-- AddForeignKey
ALTER TABLE "public"."asssitant" ADD CONSTRAINT "fk_assistant_config" FOREIGN KEY ("config_id") REFERENCES "public"."configs"("config_id") ON DELETE CASCADE ON UPDATE NO ACTION;
