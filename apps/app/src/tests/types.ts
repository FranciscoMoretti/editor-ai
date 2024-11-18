import type { OpenCanvasGraphReturnType } from "@/agent/open-canvas/state";

interface BaseEvent {
  name: string;
  run_id: string;
  tags: string[];
  metadata: {
    assistant_id: string;
    run_id: string;
    langgraph_step?: number;
    langgraph_node?: string;
    langgraph_triggers?: string[];
    langgraph_path?: (string | number)[];
    langgraph_checkpoint_ns?: string;
    __pregel_resuming?: boolean;
    __pregel_task_id?: string;
    checkpoint_ns?: string;
    ls_provider?: string;
    ls_model_name?: string;
    ls_model_type?: string;
    ls_temperature?: number;
    ls_max_tokens?: number;
    ls_stop?: undefined;
  };
}

interface ChainEvent extends BaseEvent {
  event: "on_chain_start" | "on_chain_end" | "on_chain_stream";
  data: {
    input?: any;
    output?: Partial<OpenCanvasGraphReturnType> & { route?: string };
    chunk?: {
      [key: string]: Partial<OpenCanvasGraphReturnType>;
    };
  };
}

interface LLMEvent extends BaseEvent {
  event: "on_llm_stream" | "on_llm_end" | "on_llm_start";
  data: {
    input?: {
      messages: any[];
    };
    output?: {
      generations: any[];
      llmOutput: {
        tokenUsage: {
          promptTokens: number;
          completionTokens: number;
          totalTokens: number;
        };
      };
    };
    chunk?: {
      text: string;
      generationInfo: {
        prompt: number;
        completion: number;
        finish_reason?: string;
        system_fingerprint?: string;
      };
      message: {
        lc_serializable: boolean;
        lc_kwargs: {
          content: string;
          additional_kwargs: Record<string, any>;
          tool_calls?: any[];
          invalid_tool_calls?: any[];
          tool_call_chunks?: any[];
          id: string;
          response_metadata: {
            usage: Record<string, any>;
          };
          usage_metadata: undefined;
        };
        lc_namespace: string[];
        content: string;
        name: undefined;
        additional_kwargs: Record<string, any>;
        response_metadata: {
          usage: Record<string, any>;
        };
        id: string;
        tool_calls: any[];
        invalid_tool_calls: any[];
        tool_call_chunks: any[];
        usage_metadata: undefined;
      };
    };
  };
}

export type StreamEvent = ChainEvent | LLMEvent;

export type StreamSample = StreamEvent[];
