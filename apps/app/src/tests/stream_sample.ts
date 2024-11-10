import { OpenCanvasGraphReturnType } from "../agent/open-canvas/state";
import { StreamSample } from "./types";

export const STREAM_SAMPLE: StreamSample = [
  {
    run_id: "3603c379-38ad-4282-b2fd-521ccd9abc87",
    event: "on_chain_start",
    name: "LangGraph",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
    },
    data: {
      input: {
        highlightedCode: undefined,
        highlightedText: undefined,
        next: undefined,
        language: undefined,
        artifactLength: undefined,
        regenerateWithEmojis: undefined,
        readingLevel: undefined,
        addComments: undefined,
        addLogs: undefined,
        fixBugs: undefined,
        portLanguage: undefined,
        customQuickActionId: undefined,
        messages: [
          {
            role: "user",
            content: "Help me draft an email to my professor Craig",
          },
        ],
      },
    },
  },
  {
    event: "on_chain_start",
    name: "__start__",
    run_id: "58e9ae1f-323b-4b21-b8b3-6c6341b4c3d4",
    tags: ["graph:step:0", "langsmith:hidden"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 0,
      langgraph_node: "__start__",
      langgraph_triggers: ["__start__"],
      langgraph_path: ["__pregel_pull", "__start__"],
      langgraph_checkpoint_ns: "__start__:a197ee14-83a0-5b82-bcee-07c2f87107de",
      __pregel_resuming: false,
      checkpoint_ns: "__start__:a197ee14-83a0-5b82-bcee-07c2f87107de",
      __pregel_task_id: "a197ee14-83a0-5b82-bcee-07c2f87107de",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "__start__",
    run_id: "58e9ae1f-323b-4b21-b8b3-6c6341b4c3d4",
    tags: ["graph:step:0", "langsmith:hidden"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 0,
      langgraph_node: "__start__",
      langgraph_triggers: ["__start__"],
      langgraph_path: ["__pregel_pull", "__start__"],
      langgraph_checkpoint_ns: "__start__:a197ee14-83a0-5b82-bcee-07c2f87107de",
      __pregel_resuming: false,
      checkpoint_ns: "__start__:a197ee14-83a0-5b82-bcee-07c2f87107de",
      __pregel_task_id: "a197ee14-83a0-5b82-bcee-07c2f87107de",
    },
    data: {
      output: {
        highlightedCode: undefined,
        highlightedText: undefined,
        next: undefined,
        language: undefined,
        artifactLength: undefined,
        regenerateWithEmojis: undefined,
        readingLevel: undefined,
        addComments: undefined,
        addLogs: undefined,
        fixBugs: undefined,
        portLanguage: undefined,
        customQuickActionId: undefined,
        messages: [
          {
            role: "user",
            content: "Help me draft an email to my professor Craig",
          },
        ],
      },
    },
  },
  {
    event: "on_chain_start",
    name: "generatePath",
    run_id: "c5065575-d9e1-4c51-868f-bf26301f4ae9",
    tags: ["graph:step:1"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
    },
    data: {},
  },
  {
    event: "on_chain_start",
    name: "RunnableSequence",
    run_id: "eced7c89-9a3f-44ee-8692-1a029005bad6",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
    },
    data: {
      input: [
        {
          role: "user",
          content:
            "You are an assistant tasked with routing the users query based on their most recent message.\nYou should look at this message in isolation and determine where to best route there query.\n\nUse this context about the application and its features when determining where to route to:\n\n<app-context>\nThe name of the application is \"Open Canvas\". Open Canvas is a web application where users have a chat window and a canvas to display an artifact.\nArtifacts can be any sort of writing content, emails, code, or other creative writing work. Think of artifacts as content, or writing you might find on you might find on a blog, Google doc, or other writing platform.\nUsers only have a single artifact per conversation, however they have the ability to go back and fourth between artifact edits/revisions.\nIf a user asks you to generate something completely different from the current artifact, you may do this, as the UI displaying the artifacts will be updated to show whatever they've requested.\nEven if the user goes from a 'text' artifact to a 'code' artifact.\n</app-context>\n\n\nYour options are as follows:\n<options>\n\n- 'generateArtifact': The user has inputted a request which requires generating an artifact.\n- 'respondToQuery': The user has asked a question, or has submitted a general message which requires a response, but does not require generating a artifact.\n</options>\n\nA few of the recent messages in the chat history are:\n<recent-messages>\nhuman: Help me draft an email to my professor Craig\n</recent-messages>\n\nThe user has not generated an artifact yet.",
        },
      ],
    },
  },
  {
    event: "on_llm_start",
    name: "ChatOpenAI",
    run_id: "83d2cd9d-a2de-404e-8540-4b92adf0ae95",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      input: {
        messages: [
          [
            {
              lc_serializable: true,
              lc_kwargs: {
                content:
                  "You are an assistant tasked with routing the users query based on their most recent message.\nYou should look at this message in isolation and determine where to best route there query.\n\nUse this context about the application and its features when determining where to route to:\n\n<app-context>\nThe name of the application is \"Open Canvas\". Open Canvas is a web application where users have a chat window and a canvas to display an artifact.\nArtifacts can be any sort of writing content, emails, code, or other creative writing work. Think of artifacts as content, or writing you might find on you might find on a blog, Google doc, or other writing platform.\nUsers only have a single artifact per conversation, however they have the ability to go back and fourth between artifact edits/revisions.\nIf a user asks you to generate something completely different from the current artifact, you may do this, as the UI displaying the artifacts will be updated to show whatever they've requested.\nEven if the user goes from a 'text' artifact to a 'code' artifact.\n</app-context>\n\n\nYour options are as follows:\n<options>\n\n- 'generateArtifact': The user has inputted a request which requires generating an artifact.\n- 'respondToQuery': The user has asked a question, or has submitted a general message which requires a response, but does not require generating a artifact.\n</options>\n\nA few of the recent messages in the chat history are:\n<recent-messages>\nhuman: Help me draft an email to my professor Craig\n</recent-messages>\n\nThe user has not generated an artifact yet.",
                additional_kwargs: {},
                response_metadata: {},
              },
              lc_namespace: ["langchain_core", "messages"],
              content:
                "You are an assistant tasked with routing the users query based on their most recent message.\nYou should look at this message in isolation and determine where to best route there query.\n\nUse this context about the application and its features when determining where to route to:\n\n<app-context>\nThe name of the application is \"Open Canvas\". Open Canvas is a web application where users have a chat window and a canvas to display an artifact.\nArtifacts can be any sort of writing content, emails, code, or other creative writing work. Think of artifacts as content, or writing you might find on you might find on a blog, Google doc, or other writing platform.\nUsers only have a single artifact per conversation, however they have the ability to go back and fourth between artifact edits/revisions.\nIf a user asks you to generate something completely different from the current artifact, you may do this, as the UI displaying the artifacts will be updated to show whatever they've requested.\nEven if the user goes from a 'text' artifact to a 'code' artifact.\n</app-context>\n\n\nYour options are as follows:\n<options>\n\n- 'generateArtifact': The user has inputted a request which requires generating an artifact.\n- 'respondToQuery': The user has asked a question, or has submitted a general message which requires a response, but does not require generating a artifact.\n</options>\n\nA few of the recent messages in the chat history are:\n<recent-messages>\nhuman: Help me draft an email to my professor Craig\n</recent-messages>\n\nThe user has not generated an artifact yet.",
              name: undefined,
              additional_kwargs: {},
              response_metadata: {},
              id: undefined,
            },
          ],
        ],
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "83d2cd9d-a2de-404e-8540-4b92adf0ae95",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: "route_query",
                args: "",
                id: "call_QAgl6ARz2hc105fDL5tOurf5",
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  id: "call_QAgl6ARz2hc105fDL5tOurf5",
                  type: "function",
                  function: {
                    name: "route_query",
                    arguments: "",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
            response_metadata: {
              usage: {},
            },
            tool_calls: [
              {
                name: "route_query",
                args: {},
                id: "call_QAgl6ARz2hc105fDL5tOurf5",
                type: "tool_call",
              },
            ],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                id: "call_QAgl6ARz2hc105fDL5tOurf5",
                type: "function",
                function: {
                  name: "route_query",
                  arguments: "",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
          tool_calls: [
            {
              name: "route_query",
              args: {},
              id: "call_QAgl6ARz2hc105fDL5tOurf5",
              type: "tool_call",
            },
          ],
          invalid_tool_calls: [],
          tool_call_chunks: [
            {
              name: "route_query",
              args: "",
              id: "call_QAgl6ARz2hc105fDL5tOurf5",
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "83d2cd9d-a2de-404e-8540-4b92adf0ae95",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: '{"',
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: '{"',
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: '{"',
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: '{"',
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: '{"',
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: '{"',
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "83d2cd9d-a2de-404e-8540-4b92adf0ae95",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "route",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "route",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "route",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "route",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "route",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "route",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "83d2cd9d-a2de-404e-8540-4b92adf0ae95",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: '":"',
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: '":"',
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: '":"',
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: '":"',
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: '":"',
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: '":"',
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "83d2cd9d-a2de-404e-8540-4b92adf0ae95",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "generate",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "generate",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "generate",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "generate",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "generate",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "generate",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "83d2cd9d-a2de-404e-8540-4b92adf0ae95",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "Artifact",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "Artifact",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "Artifact",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "Artifact",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "Artifact",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "Artifact",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "83d2cd9d-a2de-404e-8540-4b92adf0ae95",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: '"}',
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: '"}',
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: '"}',
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: '"}',
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: '"}',
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: '"}',
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "83d2cd9d-a2de-404e-8540-4b92adf0ae95",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
          finish_reason: "stop",
          system_fingerprint: "fp_0ba0d124f1",
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_end",
    name: "ChatOpenAI",
    run_id: "83d2cd9d-a2de-404e-8540-4b92adf0ae95",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      input: {
        messages: [
          [
            {
              lc_serializable: true,
              lc_kwargs: {
                content:
                  "You are an assistant tasked with routing the users query based on their most recent message.\nYou should look at this message in isolation and determine where to best route there query.\n\nUse this context about the application and its features when determining where to route to:\n\n<app-context>\nThe name of the application is \"Open Canvas\". Open Canvas is a web application where users have a chat window and a canvas to display an artifact.\nArtifacts can be any sort of writing content, emails, code, or other creative writing work. Think of artifacts as content, or writing you might find on you might find on a blog, Google doc, or other writing platform.\nUsers only have a single artifact per conversation, however they have the ability to go back and fourth between artifact edits/revisions.\nIf a user asks you to generate something completely different from the current artifact, you may do this, as the UI displaying the artifacts will be updated to show whatever they've requested.\nEven if the user goes from a 'text' artifact to a 'code' artifact.\n</app-context>\n\n\nYour options are as follows:\n<options>\n\n- 'generateArtifact': The user has inputted a request which requires generating an artifact.\n- 'respondToQuery': The user has asked a question, or has submitted a general message which requires a response, but does not require generating a artifact.\n</options>\n\nA few of the recent messages in the chat history are:\n<recent-messages>\nhuman: Help me draft an email to my professor Craig\n</recent-messages>\n\nThe user has not generated an artifact yet.",
                additional_kwargs: {},
                response_metadata: {},
              },
              lc_namespace: ["langchain_core", "messages"],
              content:
                "You are an assistant tasked with routing the users query based on their most recent message.\nYou should look at this message in isolation and determine where to best route there query.\n\nUse this context about the application and its features when determining where to route to:\n\n<app-context>\nThe name of the application is \"Open Canvas\". Open Canvas is a web application where users have a chat window and a canvas to display an artifact.\nArtifacts can be any sort of writing content, emails, code, or other creative writing work. Think of artifacts as content, or writing you might find on you might find on a blog, Google doc, or other writing platform.\nUsers only have a single artifact per conversation, however they have the ability to go back and fourth between artifact edits/revisions.\nIf a user asks you to generate something completely different from the current artifact, you may do this, as the UI displaying the artifacts will be updated to show whatever they've requested.\nEven if the user goes from a 'text' artifact to a 'code' artifact.\n</app-context>\n\n\nYour options are as follows:\n<options>\n\n- 'generateArtifact': The user has inputted a request which requires generating an artifact.\n- 'respondToQuery': The user has asked a question, or has submitted a general message which requires a response, but does not require generating a artifact.\n</options>\n\nA few of the recent messages in the chat history are:\n<recent-messages>\nhuman: Help me draft an email to my professor Craig\n</recent-messages>\n\nThe user has not generated an artifact yet.",
              name: undefined,
              additional_kwargs: {},
              response_metadata: {},
              id: undefined,
            },
          ],
        ],
      },
      output: {
        generations: [
          [
            {
              text: "",
              generationInfo: {
                prompt: 0,
                completion: 0,
                finish_reason: "stop",
                system_fingerprint: "fp_0ba0d124f1",
              },
              message: {
                lc_serializable: true,
                lc_kwargs: {
                  content: "",
                  additional_kwargs: {
                    tool_calls: [
                      {
                        index: 0,
                        id: "call_QAgl6ARz2hc105fDL5tOurf5",
                        type: "function",
                        function: {
                          name: "route_query",
                          arguments: '{"route":"generateArtifact"}',
                        },
                      },
                    ],
                  },
                  response_metadata: {
                    usage: {
                      prompt_tokens: 382,
                      completion_tokens: 6,
                      total_tokens: 388,
                      prompt_tokens_details: {
                        cached_tokens: 0,
                        audio_tokens: 0,
                      },
                      completion_tokens_details: {
                        reasoning_tokens: 0,
                        audio_tokens: 0,
                        accepted_prediction_tokens: 0,
                        rejected_prediction_tokens: 0,
                      },
                    },
                  },
                  tool_call_chunks: [
                    {
                      name: "route_query",
                      args: '{"route":"generateArtifact"}',
                      id: "call_QAgl6ARz2hc105fDL5tOurf5",
                      index: 0,
                      type: "tool_call_chunk",
                    },
                  ],
                  id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
                  usage_metadata: {
                    input_tokens: 382,
                    output_tokens: 6,
                    total_tokens: 388,
                    input_token_details: {
                      audio: 0,
                      cache_read: 0,
                    },
                    output_token_details: {
                      audio: 0,
                      reasoning: 0,
                    },
                  },
                  tool_calls: [
                    {
                      name: "route_query",
                      args: {
                        route: "generateArtifact",
                      },
                      id: "call_QAgl6ARz2hc105fDL5tOurf5",
                      type: "tool_call",
                    },
                  ],
                  invalid_tool_calls: [],
                },
                lc_namespace: ["langchain_core", "messages"],
                content: "",
                name: undefined,
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_QAgl6ARz2hc105fDL5tOurf5",
                      type: "function",
                      function: {
                        name: "route_query",
                        arguments: '{"route":"generateArtifact"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 382,
                    completion_tokens: 6,
                    total_tokens: 388,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                id: "chatcmpl-AS2i3et1GPLkYrQVZ9Bh0tP7dc6xl",
                tool_calls: [
                  {
                    name: "route_query",
                    args: {
                      route: "generateArtifact",
                    },
                    id: "call_QAgl6ARz2hc105fDL5tOurf5",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
                tool_call_chunks: [
                  {
                    name: "route_query",
                    args: '{"route":"generateArtifact"}',
                    id: "call_QAgl6ARz2hc105fDL5tOurf5",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                usage_metadata: {
                  input_tokens: 382,
                  output_tokens: 6,
                  total_tokens: 388,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
              },
            },
          ],
        ],
        llmOutput: {
          tokenUsage: {
            promptTokens: 382,
            completionTokens: 6,
            totalTokens: 388,
          },
        },
      },
    },
  },
  {
    event: "on_parser_start",
    name: "JsonOutputKeyToolsParser",
    run_id: "12e924d9-6b7f-46ae-a1c0-9473cb9f32f7",
    tags: ["seq:step:2"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
    },
    data: {},
  },
  {
    event: "on_parser_end",
    name: "JsonOutputKeyToolsParser",
    run_id: "12e924d9-6b7f-46ae-a1c0-9473cb9f32f7",
    tags: ["seq:step:2"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
    },
    data: {
      output: {
        route: "generateArtifact",
      },
    },
  },
  {
    event: "on_chain_end",
    name: "RunnableSequence",
    run_id: "eced7c89-9a3f-44ee-8692-1a029005bad6",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
    },
    data: {
      input: [
        {
          role: "user",
          content:
            "You are an assistant tasked with routing the users query based on their most recent message.\nYou should look at this message in isolation and determine where to best route there query.\n\nUse this context about the application and its features when determining where to route to:\n\n<app-context>\nThe name of the application is \"Open Canvas\". Open Canvas is a web application where users have a chat window and a canvas to display an artifact.\nArtifacts can be any sort of writing content, emails, code, or other creative writing work. Think of artifacts as content, or writing you might find on you might find on a blog, Google doc, or other writing platform.\nUsers only have a single artifact per conversation, however they have the ability to go back and fourth between artifact edits/revisions.\nIf a user asks you to generate something completely different from the current artifact, you may do this, as the UI displaying the artifacts will be updated to show whatever they've requested.\nEven if the user goes from a 'text' artifact to a 'code' artifact.\n</app-context>\n\n\nYour options are as follows:\n<options>\n\n- 'generateArtifact': The user has inputted a request which requires generating an artifact.\n- 'respondToQuery': The user has asked a question, or has submitted a general message which requires a response, but does not require generating a artifact.\n</options>\n\nA few of the recent messages in the chat history are:\n<recent-messages>\nhuman: Help me draft an email to my professor Craig\n</recent-messages>\n\nThe user has not generated an artifact yet.",
        },
      ],
      output: {
        route: "generateArtifact",
      },
    },
  },
  {
    event: "on_chain_start",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,generatePath>",
    run_id: "051ca30c-40f2-490e-835f-f80368c8e3fd",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,generatePath>",
    run_id: "051ca30c-40f2-490e-835f-f80368c8e3fd",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
    },
    data: {
      output: {
        next: "generateArtifact",
      },
    },
  },
  {
    event: "on_chain_start",
    name: "ChannelWrite<generateArtifact>",
    run_id: "602a0f47-dc2d-44df-9467-6f3b7ee09132",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "ChannelWrite<generateArtifact>",
    run_id: "602a0f47-dc2d-44df-9467-6f3b7ee09132",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
    },
    data: {
      output: {
        next: "generateArtifact",
      },
    },
  },
  {
    event: "on_chain_end",
    name: "generatePath",
    run_id: "c5065575-d9e1-4c51-868f-bf26301f4ae9",
    tags: ["graph:step:1"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
      __pregel_resuming: false,
      __pregel_task_id: "e7f4affd-200f-596f-ba2d-02ffc3b39573",
      checkpoint_ns: "generatePath:e7f4affd-200f-596f-ba2d-02ffc3b39573",
    },
    data: {
      output: {
        next: "generateArtifact",
      },
    },
  },
  {
    event: "on_chain_stream",
    run_id: "3603c379-38ad-4282-b2fd-521ccd9abc87",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
    },
    name: "LangGraph",
    data: {
      chunk: {
        generatePath: {
          next: "generateArtifact",
        },
      },
    },
  },
  {
    event: "on_chain_start",
    name: "generateArtifact",
    run_id: "51bad428-eca9-407f-bdfa-064faa3a0065",
    tags: ["graph:step:2"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
    },
    data: {},
  },
  {
    event: "on_llm_start",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      input: {
        messages: [
          [
            {
              lc_serializable: true,
              lc_kwargs: {
                content:
                  "You are an AI assistant tasked with generating a new artifact based on the users request.\nEnsure you use markdown syntax when appropriate, as the text you generate will be rendered in markdown.\n  \nUse the full chat history as context when generating the artifact.\n\nFollow these rules and guidelines:\n<rules-guidelines>\n- Do not wrap it in any XML tags you see in this prompt.\n- If writing code, do not add inline comments unless the user has specifically requested them. This is very important as we don't want to clutter the code.\n- Do NOT include triple backticks when generating code. The code should be in plain text.\n</rules-guidelines>\n\nYou also have the following reflections on style guidelines and general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>",
                additional_kwargs: {},
                response_metadata: {},
              },
              lc_namespace: ["langchain_core", "messages"],
              content:
                "You are an AI assistant tasked with generating a new artifact based on the users request.\nEnsure you use markdown syntax when appropriate, as the text you generate will be rendered in markdown.\n  \nUse the full chat history as context when generating the artifact.\n\nFollow these rules and guidelines:\n<rules-guidelines>\n- Do not wrap it in any XML tags you see in this prompt.\n- If writing code, do not add inline comments unless the user has specifically requested them. This is very important as we don't want to clutter the code.\n- Do NOT include triple backticks when generating code. The code should be in plain text.\n</rules-guidelines>\n\nYou also have the following reflections on style guidelines and general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>",
              name: undefined,
              additional_kwargs: {},
              response_metadata: {},
              id: undefined,
            },
            {
              lc_serializable: true,
              lc_kwargs: {
                content: "Help me draft an email to my professor Craig",
                additional_kwargs: {},
                response_metadata: {},
                id: "d443b332-353b-4c1b-9170-ac77c44b0669",
              },
              lc_namespace: ["langchain_core", "messages"],
              content: "Help me draft an email to my professor Craig",
              name: undefined,
              additional_kwargs: {},
              response_metadata: {},
              id: "d443b332-353b-4c1b-9170-ac77c44b0669",
            },
          ],
        ],
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: "generate_artifact",
                args: "",
                id: "call_4nWIRCCHXDCcL4NRuru4Gq9M",
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  id: "call_4nWIRCCHXDCcL4NRuru4Gq9M",
                  type: "function",
                  function: {
                    name: "generate_artifact",
                    arguments: "",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [
              {
                name: "generate_artifact",
                args: {},
                id: "call_4nWIRCCHXDCcL4NRuru4Gq9M",
                type: "tool_call",
              },
            ],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                id: "call_4nWIRCCHXDCcL4NRuru4Gq9M",
                type: "function",
                function: {
                  name: "generate_artifact",
                  arguments: "",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [
            {
              name: "generate_artifact",
              args: {},
              id: "call_4nWIRCCHXDCcL4NRuru4Gq9M",
              type: "tool_call",
            },
          ],
          invalid_tool_calls: [],
          tool_call_chunks: [
            {
              name: "generate_artifact",
              args: "",
              id: "call_4nWIRCCHXDCcL4NRuru4Gq9M",
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: '{"',
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: '{"',
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: '{"',
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: '{"',
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: '{"',
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: '{"',
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "type",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "type",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "type",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "type",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "type",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "type",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: '":"',
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: '":"',
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: '":"',
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: '":"',
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: '":"',
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: '":"',
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "text",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "text",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "text",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "text",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "text",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "text",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: '","',
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: '","',
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: '","',
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: '","',
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: '","',
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: '","',
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "language",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "language",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "language",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "language",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "language",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "language",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: '":"',
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: '":"',
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: '":"',
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: '":"',
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: '":"',
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: '":"',
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "other",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "other",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "other",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "other",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "other",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "other",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: '","',
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: '","',
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: '","',
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: '","',
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: '","',
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: '","',
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "artifact",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "artifact",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "artifact",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "artifact",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "artifact",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "artifact",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: '":"',
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: '":"',
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: '":"',
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: '":"',
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: '":"',
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: '":"',
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "Subject",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "Subject",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "Subject",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "Subject",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "Subject",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "Subject",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: ":",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: ":",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: ":",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: ":",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: ":",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: ":",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " Request",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " Request",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " Request",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " Request",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " Request",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " Request",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " for",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " for",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " for",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " for",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " for",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " for",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " Guidance",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " Guidance",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " Guidance",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " Guidance",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " Guidance",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " Guidance",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "\\n",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "\\n",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "\\n",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "\\n",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "\\n",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "\\n",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "\\n",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "\\n",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "\\n",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "\\n",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "\\n",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "\\n",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "Dear",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "Dear",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "Dear",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "Dear",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "Dear",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "Dear",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " Professor",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " Professor",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " Professor",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " Professor",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " Professor",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " Professor",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " Craig",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " Craig",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " Craig",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " Craig",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " Craig",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " Craig",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: ",\\",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: ",\\",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: ",\\",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: ",\\",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: ",\\",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: ",\\",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "n",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "n",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "n",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "n",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "n",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "n",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "\\n",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "\\n",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "\\n",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "\\n",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "\\n",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "\\n",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "I",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "I",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "I",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "I",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "I",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "I",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " hope",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " hope",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " hope",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " hope",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " hope",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " hope",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " this",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " this",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " this",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " this",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " this",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " this",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " message",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " message",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " message",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " message",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " message",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " message",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " finds",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " finds",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " finds",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " finds",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " finds",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " finds",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " you",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " you",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " you",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " you",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " you",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " you",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " well",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " well",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " well",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " well",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " well",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " well",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: ".",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: ".",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: ".",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: ".",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: ".",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: ".",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " I",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " I",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " I",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " I",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " I",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " I",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " am",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " am",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " am",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " am",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " am",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " am",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " writing",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " writing",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " writing",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " writing",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " writing",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " writing",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " to",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " to",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " to",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " to",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " to",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " to",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " seek",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " seek",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " seek",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " seek",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " seek",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " seek",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " your",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " your",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " your",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " your",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " your",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " your",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " guidance",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " guidance",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " guidance",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " guidance",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " guidance",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " guidance",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " regarding",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " regarding",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " regarding",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " regarding",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " regarding",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " regarding",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " [",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " [",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " [",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " [",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " [",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " [",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "specific",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "specific",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "specific",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "specific",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "specific",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "specific",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " topic",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " topic",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " topic",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " topic",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " topic",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " topic",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " or",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " or",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " or",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " or",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " or",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " or",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " question",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " question",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " question",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " question",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " question",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " question",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "].",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "].",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "].",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "].",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "].",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "].",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " I",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " I",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " I",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " I",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " I",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " I",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " have",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " have",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " have",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " have",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " have",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " have",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " been",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " been",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " been",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " been",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " been",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " been",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " [",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " [",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " [",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " [",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " [",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " [",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "brief",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "brief",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "brief",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "brief",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "brief",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "brief",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "ly",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "ly",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "ly",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "ly",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "ly",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "ly",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " explain",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " explain",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " explain",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " explain",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " explain",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " explain",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " your",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " your",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " your",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " your",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " your",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " your",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " situation",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " situation",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " situation",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " situation",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " situation",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " situation",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " or",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " or",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " or",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " or",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " or",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " or",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " what",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " what",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " what",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " what",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " what",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " what",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " you",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " you",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " you",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " you",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " you",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " you",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " have",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " have",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " have",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " have",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " have",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " have",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " been",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " been",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " been",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " been",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " been",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " been",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " working",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " working",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " working",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " working",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " working",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " working",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " on",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " on",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " on",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " on",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " on",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " on",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "],",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "],",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "],",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "],",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "],",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "],",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " and",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " and",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " and",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " and",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " and",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " and",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " I",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " I",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " I",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " I",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " I",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " I",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " would",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " would",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " would",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " would",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " would",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " would",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " greatly",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " greatly",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " greatly",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " greatly",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " greatly",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " greatly",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " appreciate",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " appreciate",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " appreciate",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " appreciate",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " appreciate",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " appreciate",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " your",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " your",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " your",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " your",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " your",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " your",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " insights",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " insights",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " insights",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " insights",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " insights",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " insights",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: ".\\",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: ".\\",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: ".\\",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: ".\\",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: ".\\",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: ".\\",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "n",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "n",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "n",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "n",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "n",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "n",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "\\n",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "\\n",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "\\n",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "\\n",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "\\n",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "\\n",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "If",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "If",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "If",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "If",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "If",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "If",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " possible",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " possible",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " possible",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " possible",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " possible",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " possible",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: ",",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: ",",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: ",",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: ",",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: ",",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: ",",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " I",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " I",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " I",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " I",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " I",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " I",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " would",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " would",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " would",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " would",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " would",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " would",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " love",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " love",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " love",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " love",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " love",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " love",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " to",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " to",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " to",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " to",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " to",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " to",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " schedule",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " schedule",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " schedule",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " schedule",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " schedule",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " schedule",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " a",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " a",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " a",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " a",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " a",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " a",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " time",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " time",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " time",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " time",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " time",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " time",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " to",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " to",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " to",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " to",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " to",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " to",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " meet",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " meet",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " meet",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " meet",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " meet",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " meet",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " with",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " with",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " with",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " with",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " with",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " with",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " you",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " you",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " you",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " you",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " you",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " you",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " or",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " or",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " or",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " or",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " or",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " or",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " discuss",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " discuss",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " discuss",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " discuss",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " discuss",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " discuss",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " this",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " this",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " this",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " this",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " this",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " this",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " further",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " further",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " further",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " further",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " further",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " further",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " via",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " via",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " via",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " via",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " via",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " via",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " email",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " email",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " email",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " email",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " email",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " email",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: ".",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: ".",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: ".",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: ".",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: ".",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: ".",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " Thank",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " Thank",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " Thank",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " Thank",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " Thank",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " Thank",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " you",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " you",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " you",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " you",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " you",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " you",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " for",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " for",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " for",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " for",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " for",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " for",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " your",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " your",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " your",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " your",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " your",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " your",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " time",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " time",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " time",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " time",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " time",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " time",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " and",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " and",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " and",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " and",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " and",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " and",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " assistance",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " assistance",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " assistance",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " assistance",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " assistance",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " assistance",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: ".\\",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: ".\\",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: ".\\",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: ".\\",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: ".\\",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: ".\\",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "n",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "n",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "n",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "n",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "n",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "n",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "\\n",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "\\n",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "\\n",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "\\n",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "\\n",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "\\n",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "Best",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "Best",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "Best",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "Best",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "Best",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "Best",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " regards",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " regards",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " regards",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " regards",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " regards",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " regards",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: ",\\",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: ",\\",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: ",\\",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: ",\\",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: ",\\",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: ",\\",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "n",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "n",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "n",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "n",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "n",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "n",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "\\n",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "\\n",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "\\n",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "\\n",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "\\n",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "\\n",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "[",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "[",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "[",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "[",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "[",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "[",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "Your",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "Your",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "Your",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "Your",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "Your",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "Your",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " Name",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " Name",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " Name",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " Name",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " Name",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " Name",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "]",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "]",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "]",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "]",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "]",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "]",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " ",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " ",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " ",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " ",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " ",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " ",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " \\",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " \\",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " \\",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " \\",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " \\",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " \\",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "n",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "n",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "n",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "n",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "n",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "n",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "[",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "[",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "[",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "[",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "[",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "[",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "Your",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "Your",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "Your",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "Your",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "Your",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "Your",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " Student",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " Student",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " Student",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " Student",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " Student",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " Student",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " ID",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " ID",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " ID",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " ID",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " ID",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " ID",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "]",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "]",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "]",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "]",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "]",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "]",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " ",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " ",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " ",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " ",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " ",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " ",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " \\",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " \\",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " \\",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " \\",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " \\",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " \\",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "n",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "n",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "n",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "n",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "n",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "n",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "[",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "[",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "[",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "[",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "[",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "[",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "Your",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "Your",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "Your",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "Your",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "Your",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "Your",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " Course",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " Course",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " Course",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " Course",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " Course",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " Course",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " Name",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " Name",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " Name",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " Name",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " Name",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " Name",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "/",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "/",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "/",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "/",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "/",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "/",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "Code",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "Code",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "Code",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "Code",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "Code",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "Code",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "]",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "]",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "]",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "]",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "]",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "]",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " ",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " ",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " ",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " ",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " ",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " ",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " \\",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " \\",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " \\",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " \\",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " \\",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " \\",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "n",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "n",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "n",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "n",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "n",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "n",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "[",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "[",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "[",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "[",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "[",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "[",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "Your",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "Your",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "Your",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "Your",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "Your",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "Your",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " Contact",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " Contact",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " Contact",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " Contact",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " Contact",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " Contact",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " Information",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " Information",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " Information",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " Information",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " Information",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " Information",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "]",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "]",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "]",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "]",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "]",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "]",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: '","',
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: '","',
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: '","',
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: '","',
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: '","',
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: '","',
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "title",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "title",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "title",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "title",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "title",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "title",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: '":"',
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: '":"',
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: '":"',
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: '":"',
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: '":"',
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: '":"',
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: "Email",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: "Email",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "Email",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: "Email",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "Email",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "Email",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " to",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " to",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " to",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " to",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " to",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " to",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " Professor",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " Professor",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " Professor",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " Professor",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " Professor",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " Professor",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: " Craig",
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: " Craig",
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " Craig",
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: " Craig",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " Craig",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " Craig",
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [
              {
                name: undefined,
                args: '"}',
                id: undefined,
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  function: {
                    arguments: '"}',
                  },
                },
              ],
            },
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: '"}',
                id: undefined,
                error: "Malformed args.",
                type: "invalid_tool_call",
              },
            ],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {
            tool_calls: [
              {
                index: 0,
                function: {
                  arguments: '"}',
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: '"}',
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: '"}',
              id: undefined,
              index: 0,
              type: "tool_call_chunk",
            },
          ],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
          finish_reason: "stop",
          system_fingerprint: "fp_0ba0d124f1",
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_end",
    name: "generate_artifact",
    run_id: "6a64b981-a6c2-4882-aa15-6f603df00a77",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: undefined,
      ls_stop: undefined,
    },
    data: {
      input: {
        messages: [
          [
            {
              lc_serializable: true,
              lc_kwargs: {
                content:
                  "You are an AI assistant tasked with generating a new artifact based on the users request.\nEnsure you use markdown syntax when appropriate, as the text you generate will be rendered in markdown.\n  \nUse the full chat history as context when generating the artifact.\n\nFollow these rules and guidelines:\n<rules-guidelines>\n- Do not wrap it in any XML tags you see in this prompt.\n- If writing code, do not add inline comments unless the user has specifically requested them. This is very important as we don't want to clutter the code.\n- Do NOT include triple backticks when generating code. The code should be in plain text.\n</rules-guidelines>\n\nYou also have the following reflections on style guidelines and general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>",
                additional_kwargs: {},
                response_metadata: {},
              },
              lc_namespace: ["langchain_core", "messages"],
              content:
                "You are an AI assistant tasked with generating a new artifact based on the users request.\nEnsure you use markdown syntax when appropriate, as the text you generate will be rendered in markdown.\n  \nUse the full chat history as context when generating the artifact.\n\nFollow these rules and guidelines:\n<rules-guidelines>\n- Do not wrap it in any XML tags you see in this prompt.\n- If writing code, do not add inline comments unless the user has specifically requested them. This is very important as we don't want to clutter the code.\n- Do NOT include triple backticks when generating code. The code should be in plain text.\n</rules-guidelines>\n\nYou also have the following reflections on style guidelines and general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>",
              name: undefined,
              additional_kwargs: {},
              response_metadata: {},
              id: undefined,
            },
            {
              lc_serializable: true,
              lc_kwargs: {
                content: "Help me draft an email to my professor Craig",
                additional_kwargs: {},
                response_metadata: {},
                id: "d443b332-353b-4c1b-9170-ac77c44b0669",
              },
              lc_namespace: ["langchain_core", "messages"],
              content: "Help me draft an email to my professor Craig",
              name: undefined,
              additional_kwargs: {},
              response_metadata: {},
              id: "d443b332-353b-4c1b-9170-ac77c44b0669",
            },
          ],
        ],
      },
      output: {
        generations: [
          [
            {
              text: "",
              generationInfo: {
                prompt: 0,
                completion: 0,
                finish_reason: "stop",
                system_fingerprint: "fp_0ba0d124f1",
              },
              message: {
                lc_serializable: true,
                lc_kwargs: {
                  content: "",
                  additional_kwargs: {
                    tool_calls: [
                      {
                        index: 0,
                        id: "call_4nWIRCCHXDCcL4NRuru4Gq9M",
                        type: "function",
                        function: {
                          name: "generate_artifact",
                          arguments:
                            '{"type":"text","language":"other","artifact":"Subject: Request for Guidance\\n\\nDear Professor Craig,\\n\\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been [briefly explain your situation or what you have been working on], and I would greatly appreciate your insights.\\n\\nIf possible, I would love to schedule a time to meet with you or discuss this further via email. Thank you for your time and assistance.\\n\\nBest regards,\\n\\n[Your Name]  \\n[Your Student ID]  \\n[Your Course Name/Code]  \\n[Your Contact Information]","title":"Email to Professor Craig"}',
                        },
                      },
                    ],
                  },
                  response_metadata: {
                    usage: {
                      prompt_tokens: 372,
                      completion_tokens: 147,
                      total_tokens: 519,
                      prompt_tokens_details: {
                        cached_tokens: 0,
                        audio_tokens: 0,
                      },
                      completion_tokens_details: {
                        reasoning_tokens: 0,
                        audio_tokens: 0,
                        accepted_prediction_tokens: 0,
                        rejected_prediction_tokens: 0,
                      },
                    },
                  },
                  tool_call_chunks: [
                    {
                      name: "generate_artifact",
                      args: '{"type":"text","language":"other","artifact":"Subject: Request for Guidance\\n\\nDear Professor Craig,\\n\\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been [briefly explain your situation or what you have been working on], and I would greatly appreciate your insights.\\n\\nIf possible, I would love to schedule a time to meet with you or discuss this further via email. Thank you for your time and assistance.\\n\\nBest regards,\\n\\n[Your Name]  \\n[Your Student ID]  \\n[Your Course Name/Code]  \\n[Your Contact Information]","title":"Email to Professor Craig"}',
                      id: "call_4nWIRCCHXDCcL4NRuru4Gq9M",
                      index: 0,
                      type: "tool_call_chunk",
                    },
                  ],
                  id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
                  usage_metadata: {
                    input_tokens: 372,
                    output_tokens: 147,
                    total_tokens: 519,
                    input_token_details: {
                      audio: 0,
                      cache_read: 0,
                    },
                    output_token_details: {
                      audio: 0,
                      reasoning: 0,
                    },
                  },
                  tool_calls: [
                    {
                      name: "generate_artifact",
                      args: {
                        type: "text",
                        language: "other",
                        artifact:
                          "Subject: Request for Guidance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been [briefly explain your situation or what you have been working on], and I would greatly appreciate your insights.\n\nIf possible, I would love to schedule a time to meet with you or discuss this further via email. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]  \n[Your Student ID]  \n[Your Course Name/Code]  \n[Your Contact Information]",
                        title: "Email to Professor Craig",
                      },
                      id: "call_4nWIRCCHXDCcL4NRuru4Gq9M",
                      type: "tool_call",
                    },
                  ],
                  invalid_tool_calls: [],
                },
                lc_namespace: ["langchain_core", "messages"],
                content: "",
                name: undefined,
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_4nWIRCCHXDCcL4NRuru4Gq9M",
                      type: "function",
                      function: {
                        name: "generate_artifact",
                        arguments:
                          '{"type":"text","language":"other","artifact":"Subject: Request for Guidance\\n\\nDear Professor Craig,\\n\\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been [briefly explain your situation or what you have been working on], and I would greatly appreciate your insights.\\n\\nIf possible, I would love to schedule a time to meet with you or discuss this further via email. Thank you for your time and assistance.\\n\\nBest regards,\\n\\n[Your Name]  \\n[Your Student ID]  \\n[Your Course Name/Code]  \\n[Your Contact Information]","title":"Email to Professor Craig"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 372,
                    completion_tokens: 147,
                    total_tokens: 519,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                id: "chatcmpl-AS2i38xOQP6yB4yPMBcnrTxZcHdHR",
                tool_calls: [
                  {
                    name: "generate_artifact",
                    args: {
                      type: "text",
                      language: "other",
                      artifact:
                        "Subject: Request for Guidance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been [briefly explain your situation or what you have been working on], and I would greatly appreciate your insights.\n\nIf possible, I would love to schedule a time to meet with you or discuss this further via email. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]  \n[Your Student ID]  \n[Your Course Name/Code]  \n[Your Contact Information]",
                      title: "Email to Professor Craig",
                    },
                    id: "call_4nWIRCCHXDCcL4NRuru4Gq9M",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
                tool_call_chunks: [
                  {
                    name: "generate_artifact",
                    args: '{"type":"text","language":"other","artifact":"Subject: Request for Guidance\\n\\nDear Professor Craig,\\n\\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been [briefly explain your situation or what you have been working on], and I would greatly appreciate your insights.\\n\\nIf possible, I would love to schedule a time to meet with you or discuss this further via email. Thank you for your time and assistance.\\n\\nBest regards,\\n\\n[Your Name]  \\n[Your Student ID]  \\n[Your Course Name/Code]  \\n[Your Contact Information]","title":"Email to Professor Craig"}',
                    id: "call_4nWIRCCHXDCcL4NRuru4Gq9M",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                usage_metadata: {
                  input_tokens: 372,
                  output_tokens: 147,
                  total_tokens: 519,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
              },
            },
          ],
        ],
        llmOutput: {
          tokenUsage: {
            promptTokens: 372,
            completionTokens: 147,
            totalTokens: 519,
          },
        },
      },
    },
  },
  {
    event: "on_chain_start",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,generateArtifact>",
    run_id: "6ed8ccde-a6d6-423e-b859-26aa2adeccbd",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,generateArtifact>",
    run_id: "6ed8ccde-a6d6-423e-b859-26aa2adeccbd",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
    },
    data: {
      output: {
        artifact: {
          currentIndex: 1,
          contents: [
            {
              index: 1,
              type: "text",
              title: "Email to Professor Craig",
              fullMarkdown:
                "Subject: Request for Guidance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been [briefly explain your situation or what you have been working on], and I would greatly appreciate your insights.\n\nIf possible, I would love to schedule a time to meet with you or discuss this further via email. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]  \n[Your Student ID]  \n[Your Course Name/Code]  \n[Your Contact Information]",
            },
          ],
        },
      },
    },
  },
  {
    event: "on_chain_end",
    name: "generateArtifact",
    run_id: "51bad428-eca9-407f-bdfa-064faa3a0065",
    tags: ["graph:step:2"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      __pregel_resuming: false,
      __pregel_task_id: "c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
      checkpoint_ns: "generateArtifact:c368fbaa-2d08-52e7-814d-9be61e8cd5b9",
    },
    data: {
      output: {
        artifact: {
          currentIndex: 1,
          contents: [
            {
              index: 1,
              type: "text",
              title: "Email to Professor Craig",
              fullMarkdown:
                "Subject: Request for Guidance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been [briefly explain your situation or what you have been working on], and I would greatly appreciate your insights.\n\nIf possible, I would love to schedule a time to meet with you or discuss this further via email. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]  \n[Your Student ID]  \n[Your Course Name/Code]  \n[Your Contact Information]",
            },
          ],
        },
      },
    },
  },
  {
    event: "on_chain_stream",
    run_id: "3603c379-38ad-4282-b2fd-521ccd9abc87",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
    },
    name: "LangGraph",
    data: {
      chunk: {
        generateArtifact: {
          artifact: {
            currentIndex: 1,
            contents: [
              {
                index: 1,
                type: "text",
                title: "Email to Professor Craig",
                fullMarkdown:
                  "Subject: Request for Guidance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been [briefly explain your situation or what you have been working on], and I would greatly appreciate your insights.\n\nIf possible, I would love to schedule a time to meet with you or discuss this further via email. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]  \n[Your Student ID]  \n[Your Course Name/Code]  \n[Your Contact Information]",
              },
            ],
          },
        },
      },
    },
  },
  {
    event: "on_chain_start",
    name: "generateFollowup",
    run_id: "acb24f8f-f9ba-461b-ae09-35f0313037e1",
    tags: ["graph:step:3"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
    },
    data: {},
  },
  {
    event: "on_llm_start",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      input: {
        messages: [
          [
            {
              lc_serializable: true,
              lc_kwargs: {
                content:
                  "You are an AI assistant tasked with generating a followup to the artifact the user just generated.\nThe context is you're having a conversation with the user, and you've just generated an artifact for them. Now you should follow up with a message that notifies them you're done. Make this message creative!\n\nI've provided some examples of what your followup might be, but please feel free to get creative here!\n\n<examples>\n\n<example id=\"1\">\nHere's a comedic twist on your poem about Bernese Mountain dogs. Let me know if this captures the humor you were aiming for, or if you'd like me to adjust anything!\n</example>\n\n<example id=\"2\">\nHere's a poem celebrating the warmth and gentle nature of pandas. Let me know if you'd like any adjustments or a different style!\n</example>\n\n<example id=\"3\">\nDoes this capture what you had in mind, or is there a different direction you'd like to explore?\n</example>\n\n</examples>\n\nHere is the artifact you generated:\n<artifact>\nSubject: Request for Guidance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been [briefly explain your situation or what you have been working on], and I would greatly appreciate your insights.\n\nIf possible, I would love to schedule a time to meet with you or discuss this further via email. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]  \n[Your Student ID]  \n[Your Course Name/Code]  \n[Your Contact Information]\n</artifact>\n\nYou also have the following reflections on general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>\n\nFinally, here is the chat history between you and the user:\n<conversation>\n<human>\nHelp me draft an email to my professor Craig\n</human>\n</conversation>\n\nThis message should be very short. Never generate more than 2-3 short sentences. Your tone should be somewhat formal, but still friendly. Remember, you're an AI assistant.\n\nDo NOT include any tags, or extra text before or after your response. Do NOT prefix your response. Your response to this message should ONLY contain the description/followup message.",
                additional_kwargs: {},
                response_metadata: {},
              },
              lc_namespace: ["langchain_core", "messages"],
              content:
                "You are an AI assistant tasked with generating a followup to the artifact the user just generated.\nThe context is you're having a conversation with the user, and you've just generated an artifact for them. Now you should follow up with a message that notifies them you're done. Make this message creative!\n\nI've provided some examples of what your followup might be, but please feel free to get creative here!\n\n<examples>\n\n<example id=\"1\">\nHere's a comedic twist on your poem about Bernese Mountain dogs. Let me know if this captures the humor you were aiming for, or if you'd like me to adjust anything!\n</example>\n\n<example id=\"2\">\nHere's a poem celebrating the warmth and gentle nature of pandas. Let me know if you'd like any adjustments or a different style!\n</example>\n\n<example id=\"3\">\nDoes this capture what you had in mind, or is there a different direction you'd like to explore?\n</example>\n\n</examples>\n\nHere is the artifact you generated:\n<artifact>\nSubject: Request for Guidance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been [briefly explain your situation or what you have been working on], and I would greatly appreciate your insights.\n\nIf possible, I would love to schedule a time to meet with you or discuss this further via email. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]  \n[Your Student ID]  \n[Your Course Name/Code]  \n[Your Contact Information]\n</artifact>\n\nYou also have the following reflections on general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>\n\nFinally, here is the chat history between you and the user:\n<conversation>\n<human>\nHelp me draft an email to my professor Craig\n</human>\n</conversation>\n\nThis message should be very short. Never generate more than 2-3 short sentences. Your tone should be somewhat formal, but still friendly. Remember, you're an AI assistant.\n\nDo NOT include any tags, or extra text before or after your response. Do NOT prefix your response. Your response to this message should ONLY contain the description/followup message.",
              name: undefined,
              additional_kwargs: {},
              response_metadata: {},
              id: undefined,
            },
          ],
        ],
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "Your",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "Your",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "Your",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " email",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " email",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " email",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " draft",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " draft",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " draft",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " to",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " to",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " to",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " Professor",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " Professor",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " Professor",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " Craig",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " Craig",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " Craig",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " is",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " is",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " is",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " ready",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " ready",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " ready",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "!",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "!",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "!",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " If",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " If",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " If",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " you",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " you",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " you",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " need",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " need",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " need",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " any",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " any",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " any",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " tweaks",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " tweaks",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " tweaks",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " or",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " or",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " or",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " additional",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " additional",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " additional",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " details",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " details",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " details",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: ",",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: ",",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: ",",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " just",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " just",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " just",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " let",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " let",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " let",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " me",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " me",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " me",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " know",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " know",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " know",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: ".",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: ".",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: ".",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "",
        generationInfo: {
          prompt: 0,
          completion: 0,
          finish_reason: "stop",
          system_fingerprint: "fp_0ba0d124f1",
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
          tool_calls: [],
          invalid_tool_calls: [],
          tool_call_chunks: [],
          usage_metadata: undefined,
        },
      },
    },
  },
  {
    event: "on_llm_end",
    name: "ChatOpenAI",
    run_id: "34a6c18f-8f8d-4d31-9359-403801f2c46b",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      input: {
        messages: [
          [
            {
              lc_serializable: true,
              lc_kwargs: {
                content:
                  "You are an AI assistant tasked with generating a followup to the artifact the user just generated.\nThe context is you're having a conversation with the user, and you've just generated an artifact for them. Now you should follow up with a message that notifies them you're done. Make this message creative!\n\nI've provided some examples of what your followup might be, but please feel free to get creative here!\n\n<examples>\n\n<example id=\"1\">\nHere's a comedic twist on your poem about Bernese Mountain dogs. Let me know if this captures the humor you were aiming for, or if you'd like me to adjust anything!\n</example>\n\n<example id=\"2\">\nHere's a poem celebrating the warmth and gentle nature of pandas. Let me know if you'd like any adjustments or a different style!\n</example>\n\n<example id=\"3\">\nDoes this capture what you had in mind, or is there a different direction you'd like to explore?\n</example>\n\n</examples>\n\nHere is the artifact you generated:\n<artifact>\nSubject: Request for Guidance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been [briefly explain your situation or what you have been working on], and I would greatly appreciate your insights.\n\nIf possible, I would love to schedule a time to meet with you or discuss this further via email. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]  \n[Your Student ID]  \n[Your Course Name/Code]  \n[Your Contact Information]\n</artifact>\n\nYou also have the following reflections on general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>\n\nFinally, here is the chat history between you and the user:\n<conversation>\n<human>\nHelp me draft an email to my professor Craig\n</human>\n</conversation>\n\nThis message should be very short. Never generate more than 2-3 short sentences. Your tone should be somewhat formal, but still friendly. Remember, you're an AI assistant.\n\nDo NOT include any tags, or extra text before or after your response. Do NOT prefix your response. Your response to this message should ONLY contain the description/followup message.",
                additional_kwargs: {},
                response_metadata: {},
              },
              lc_namespace: ["langchain_core", "messages"],
              content:
                "You are an AI assistant tasked with generating a followup to the artifact the user just generated.\nThe context is you're having a conversation with the user, and you've just generated an artifact for them. Now you should follow up with a message that notifies them you're done. Make this message creative!\n\nI've provided some examples of what your followup might be, but please feel free to get creative here!\n\n<examples>\n\n<example id=\"1\">\nHere's a comedic twist on your poem about Bernese Mountain dogs. Let me know if this captures the humor you were aiming for, or if you'd like me to adjust anything!\n</example>\n\n<example id=\"2\">\nHere's a poem celebrating the warmth and gentle nature of pandas. Let me know if you'd like any adjustments or a different style!\n</example>\n\n<example id=\"3\">\nDoes this capture what you had in mind, or is there a different direction you'd like to explore?\n</example>\n\n</examples>\n\nHere is the artifact you generated:\n<artifact>\nSubject: Request for Guidance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been [briefly explain your situation or what you have been working on], and I would greatly appreciate your insights.\n\nIf possible, I would love to schedule a time to meet with you or discuss this further via email. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]  \n[Your Student ID]  \n[Your Course Name/Code]  \n[Your Contact Information]\n</artifact>\n\nYou also have the following reflections on general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>\n\nFinally, here is the chat history between you and the user:\n<conversation>\n<human>\nHelp me draft an email to my professor Craig\n</human>\n</conversation>\n\nThis message should be very short. Never generate more than 2-3 short sentences. Your tone should be somewhat formal, but still friendly. Remember, you're an AI assistant.\n\nDo NOT include any tags, or extra text before or after your response. Do NOT prefix your response. Your response to this message should ONLY contain the description/followup message.",
              name: undefined,
              additional_kwargs: {},
              response_metadata: {},
              id: undefined,
            },
          ],
        ],
      },
      output: {
        generations: [
          [
            {
              text: "Your email draft to Professor Craig is ready! If you need any tweaks or additional details, just let me know.",
              generationInfo: {
                prompt: 0,
                completion: 0,
                finish_reason: "stop",
                system_fingerprint: "fp_0ba0d124f1",
              },
              message: {
                lc_serializable: true,
                lc_kwargs: {
                  content:
                    "Your email draft to Professor Craig is ready! If you need any tweaks or additional details, just let me know.",
                  additional_kwargs: {},
                  response_metadata: {
                    usage: {
                      prompt_tokens: 466,
                      completion_tokens: 23,
                      total_tokens: 489,
                      prompt_tokens_details: {
                        cached_tokens: 0,
                        audio_tokens: 0,
                      },
                      completion_tokens_details: {
                        reasoning_tokens: 0,
                        audio_tokens: 0,
                        accepted_prediction_tokens: 0,
                        rejected_prediction_tokens: 0,
                      },
                    },
                  },
                  tool_call_chunks: [],
                  id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
                  usage_metadata: {
                    input_tokens: 466,
                    output_tokens: 23,
                    total_tokens: 489,
                    input_token_details: {
                      audio: 0,
                      cache_read: 0,
                    },
                    output_token_details: {
                      audio: 0,
                      reasoning: 0,
                    },
                  },
                  tool_calls: [],
                  invalid_tool_calls: [],
                },
                lc_namespace: ["langchain_core", "messages"],
                content:
                  "Your email draft to Professor Craig is ready! If you need any tweaks or additional details, just let me know.",
                name: undefined,
                additional_kwargs: {},
                response_metadata: {
                  usage: {
                    prompt_tokens: 466,
                    completion_tokens: 23,
                    total_tokens: 489,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
                tool_calls: [],
                invalid_tool_calls: [],
                tool_call_chunks: [],
                usage_metadata: {
                  input_tokens: 466,
                  output_tokens: 23,
                  total_tokens: 489,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
              },
            },
          ],
        ],
        llmOutput: {
          tokenUsage: {
            promptTokens: 466,
            completionTokens: 23,
            totalTokens: 489,
          },
        },
      },
    },
  },
  {
    event: "on_chain_start",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,generateFollowup>",
    run_id: "d4c55830-c407-49a9-a040-573e68457b1e",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,generateFollowup>",
    run_id: "d4c55830-c407-49a9-a040-573e68457b1e",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
    },
    data: {
      output: {
        messages: [
          {
            lc_serializable: true,
            lc_kwargs: {
              content:
                "Your email draft to Professor Craig is ready! If you need any tweaks or additional details, just let me know.",
              additional_kwargs: {},
              response_metadata: {
                usage: {
                  prompt_tokens: 466,
                  completion_tokens: 23,
                  total_tokens: 489,
                  prompt_tokens_details: {
                    cached_tokens: 0,
                    audio_tokens: 0,
                  },
                  completion_tokens_details: {
                    reasoning_tokens: 0,
                    audio_tokens: 0,
                    accepted_prediction_tokens: 0,
                    rejected_prediction_tokens: 0,
                  },
                },
              },
              tool_call_chunks: [],
              id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
              usage_metadata: {
                input_tokens: 466,
                output_tokens: 23,
                total_tokens: 489,
                input_token_details: {
                  audio: 0,
                  cache_read: 0,
                },
                output_token_details: {
                  audio: 0,
                  reasoning: 0,
                },
              },
              tool_calls: [],
              invalid_tool_calls: [],
            },
            lc_namespace: ["langchain_core", "messages"],
            content:
              "Your email draft to Professor Craig is ready! If you need any tweaks or additional details, just let me know.",
            name: undefined,
            additional_kwargs: {},
            response_metadata: {
              usage: {
                prompt_tokens: 466,
                completion_tokens: 23,
                total_tokens: 489,
                prompt_tokens_details: {
                  cached_tokens: 0,
                  audio_tokens: 0,
                },
                completion_tokens_details: {
                  reasoning_tokens: 0,
                  audio_tokens: 0,
                  accepted_prediction_tokens: 0,
                  rejected_prediction_tokens: 0,
                },
              },
            },
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            tool_calls: [],
            invalid_tool_calls: [],
            tool_call_chunks: [],
            usage_metadata: {
              input_tokens: 466,
              output_tokens: 23,
              total_tokens: 489,
              input_token_details: {
                audio: 0,
                cache_read: 0,
              },
              output_token_details: {
                audio: 0,
                reasoning: 0,
              },
            },
          },
        ],
      },
    },
  },
  {
    event: "on_chain_end",
    name: "generateFollowup",
    run_id: "acb24f8f-f9ba-461b-ae09-35f0313037e1",
    tags: ["graph:step:3"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
      __pregel_resuming: false,
      __pregel_task_id: "295920c6-26c7-59ae-88e1-0d268f86ba3a",
      checkpoint_ns: "generateFollowup:295920c6-26c7-59ae-88e1-0d268f86ba3a",
    },
    data: {
      output: {
        messages: [
          {
            lc_serializable: true,
            lc_kwargs: {
              content:
                "Your email draft to Professor Craig is ready! If you need any tweaks or additional details, just let me know.",
              additional_kwargs: {},
              response_metadata: {
                usage: {
                  prompt_tokens: 466,
                  completion_tokens: 23,
                  total_tokens: 489,
                  prompt_tokens_details: {
                    cached_tokens: 0,
                    audio_tokens: 0,
                  },
                  completion_tokens_details: {
                    reasoning_tokens: 0,
                    audio_tokens: 0,
                    accepted_prediction_tokens: 0,
                    rejected_prediction_tokens: 0,
                  },
                },
              },
              tool_call_chunks: [],
              id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
              usage_metadata: {
                input_tokens: 466,
                output_tokens: 23,
                total_tokens: 489,
                input_token_details: {
                  audio: 0,
                  cache_read: 0,
                },
                output_token_details: {
                  audio: 0,
                  reasoning: 0,
                },
              },
              tool_calls: [],
              invalid_tool_calls: [],
            },
            lc_namespace: ["langchain_core", "messages"],
            content:
              "Your email draft to Professor Craig is ready! If you need any tweaks or additional details, just let me know.",
            name: undefined,
            additional_kwargs: {},
            response_metadata: {
              usage: {
                prompt_tokens: 466,
                completion_tokens: 23,
                total_tokens: 489,
                prompt_tokens_details: {
                  cached_tokens: 0,
                  audio_tokens: 0,
                },
                completion_tokens_details: {
                  reasoning_tokens: 0,
                  audio_tokens: 0,
                  accepted_prediction_tokens: 0,
                  rejected_prediction_tokens: 0,
                },
              },
            },
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            tool_calls: [],
            invalid_tool_calls: [],
            tool_call_chunks: [],
            usage_metadata: {
              input_tokens: 466,
              output_tokens: 23,
              total_tokens: 489,
              input_token_details: {
                audio: 0,
                cache_read: 0,
              },
              output_token_details: {
                audio: 0,
                reasoning: 0,
              },
            },
          },
        ],
      },
    },
  },
  {
    event: "on_chain_stream",
    run_id: "3603c379-38ad-4282-b2fd-521ccd9abc87",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
    },
    name: "LangGraph",
    data: {
      chunk: {
        generateFollowup: {
          messages: [
            {
              lc_serializable: true,
              lc_kwargs: {
                content:
                  "Your email draft to Professor Craig is ready! If you need any tweaks or additional details, just let me know.",
                additional_kwargs: {},
                response_metadata: {
                  usage: {
                    prompt_tokens: 466,
                    completion_tokens: 23,
                    total_tokens: 489,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [],
                id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
                usage_metadata: {
                  input_tokens: 466,
                  output_tokens: 23,
                  total_tokens: 489,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [],
                invalid_tool_calls: [],
              },
              lc_namespace: ["langchain_core", "messages"],
              content:
                "Your email draft to Professor Craig is ready! If you need any tweaks or additional details, just let me know.",
              name: undefined,
              additional_kwargs: {},
              response_metadata: {
                usage: {
                  prompt_tokens: 466,
                  completion_tokens: 23,
                  total_tokens: 489,
                  prompt_tokens_details: {
                    cached_tokens: 0,
                    audio_tokens: 0,
                  },
                  completion_tokens_details: {
                    reasoning_tokens: 0,
                    audio_tokens: 0,
                    accepted_prediction_tokens: 0,
                    rejected_prediction_tokens: 0,
                  },
                },
              },
              id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
              tool_calls: [],
              invalid_tool_calls: [],
              tool_call_chunks: [],
              usage_metadata: {
                input_tokens: 466,
                output_tokens: 23,
                total_tokens: 489,
                input_token_details: {
                  audio: 0,
                  cache_read: 0,
                },
                output_token_details: {
                  audio: 0,
                  reasoning: 0,
                },
              },
            },
          ],
        },
      },
    },
  },
  {
    event: "on_chain_start",
    name: "reflect",
    run_id: "a62b1e70-02ec-4fff-b843-9157c847b461",
    tags: ["graph:step:4"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 4,
      langgraph_node: "reflect",
      langgraph_triggers: ["generateFollowup"],
      langgraph_path: ["__pregel_pull", "reflect"],
      langgraph_checkpoint_ns: "reflect:376faaa1-3531-5350-9d71-21e4727463cb",
      __pregel_resuming: false,
      __pregel_task_id: "376faaa1-3531-5350-9d71-21e4727463cb",
      checkpoint_ns: "reflect:376faaa1-3531-5350-9d71-21e4727463cb",
    },
    data: {},
  },
  {
    event: "on_chain_start",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,reflect>",
    run_id: "1a09afb3-d4fa-47f3-952b-1967df20fb12",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 4,
      langgraph_node: "reflect",
      langgraph_triggers: ["generateFollowup"],
      langgraph_path: ["__pregel_pull", "reflect"],
      langgraph_checkpoint_ns: "reflect:376faaa1-3531-5350-9d71-21e4727463cb",
      __pregel_resuming: false,
      __pregel_task_id: "376faaa1-3531-5350-9d71-21e4727463cb",
      checkpoint_ns: "reflect:376faaa1-3531-5350-9d71-21e4727463cb",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,reflect>",
    run_id: "1a09afb3-d4fa-47f3-952b-1967df20fb12",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 4,
      langgraph_node: "reflect",
      langgraph_triggers: ["generateFollowup"],
      langgraph_path: ["__pregel_pull", "reflect"],
      langgraph_checkpoint_ns: "reflect:376faaa1-3531-5350-9d71-21e4727463cb",
      __pregel_resuming: false,
      __pregel_task_id: "376faaa1-3531-5350-9d71-21e4727463cb",
      checkpoint_ns: "reflect:376faaa1-3531-5350-9d71-21e4727463cb",
    },
    data: {
      output: {},
    },
  },
  {
    event: "on_chain_end",
    name: "reflect",
    run_id: "a62b1e70-02ec-4fff-b843-9157c847b461",
    tags: ["graph:step:4"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 4,
      langgraph_node: "reflect",
      langgraph_triggers: ["generateFollowup"],
      langgraph_path: ["__pregel_pull", "reflect"],
      langgraph_checkpoint_ns: "reflect:376faaa1-3531-5350-9d71-21e4727463cb",
      __pregel_resuming: false,
      __pregel_task_id: "376faaa1-3531-5350-9d71-21e4727463cb",
      checkpoint_ns: "reflect:376faaa1-3531-5350-9d71-21e4727463cb",
    },
    data: {
      output: {},
    },
  },
  {
    event: "on_chain_stream",
    run_id: "3603c379-38ad-4282-b2fd-521ccd9abc87",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
    },
    name: "LangGraph",
    data: {
      chunk: {},
    },
  },
  {
    event: "on_chain_start",
    name: "cleanState",
    run_id: "9c85830c-2296-4fcf-9fa0-14c851194477",
    tags: ["graph:step:5"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 5,
      langgraph_node: "cleanState",
      langgraph_triggers: ["reflect"],
      langgraph_path: ["__pregel_pull", "cleanState"],
      langgraph_checkpoint_ns:
        "cleanState:c722b0e9-879e-575a-8d79-19c817830e1e",
      __pregel_resuming: false,
      __pregel_task_id: "c722b0e9-879e-575a-8d79-19c817830e1e",
      checkpoint_ns: "cleanState:c722b0e9-879e-575a-8d79-19c817830e1e",
    },
    data: {},
  },
  {
    event: "on_chain_start",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,cleanState>",
    run_id: "99fa988d-5bbf-45ca-83c1-257e03210e52",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 5,
      langgraph_node: "cleanState",
      langgraph_triggers: ["reflect"],
      langgraph_path: ["__pregel_pull", "cleanState"],
      langgraph_checkpoint_ns:
        "cleanState:c722b0e9-879e-575a-8d79-19c817830e1e",
      __pregel_resuming: false,
      __pregel_task_id: "c722b0e9-879e-575a-8d79-19c817830e1e",
      checkpoint_ns: "cleanState:c722b0e9-879e-575a-8d79-19c817830e1e",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,cleanState>",
    run_id: "99fa988d-5bbf-45ca-83c1-257e03210e52",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 5,
      langgraph_node: "cleanState",
      langgraph_triggers: ["reflect"],
      langgraph_path: ["__pregel_pull", "cleanState"],
      langgraph_checkpoint_ns:
        "cleanState:c722b0e9-879e-575a-8d79-19c817830e1e",
      __pregel_resuming: false,
      __pregel_task_id: "c722b0e9-879e-575a-8d79-19c817830e1e",
      checkpoint_ns: "cleanState:c722b0e9-879e-575a-8d79-19c817830e1e",
    },
    data: {
      output: {
        highlightedCode: undefined,
        highlightedText: undefined,
        next: undefined,
        language: undefined,
        artifactLength: undefined,
        regenerateWithEmojis: undefined,
        readingLevel: undefined,
        addComments: undefined,
        addLogs: undefined,
        fixBugs: undefined,
        portLanguage: undefined,
        customQuickActionId: undefined,
      },
    },
  },
  {
    event: "on_chain_end",
    name: "cleanState",
    run_id: "9c85830c-2296-4fcf-9fa0-14c851194477",
    tags: ["graph:step:5"],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
      langgraph_step: 5,
      langgraph_node: "cleanState",
      langgraph_triggers: ["reflect"],
      langgraph_path: ["__pregel_pull", "cleanState"],
      langgraph_checkpoint_ns:
        "cleanState:c722b0e9-879e-575a-8d79-19c817830e1e",
      __pregel_resuming: false,
      __pregel_task_id: "c722b0e9-879e-575a-8d79-19c817830e1e",
      checkpoint_ns: "cleanState:c722b0e9-879e-575a-8d79-19c817830e1e",
    },
    data: {
      output: {
        highlightedCode: undefined,
        highlightedText: undefined,
        next: undefined,
        language: undefined,
        artifactLength: undefined,
        regenerateWithEmojis: undefined,
        readingLevel: undefined,
        addComments: undefined,
        addLogs: undefined,
        fixBugs: undefined,
        portLanguage: undefined,
        customQuickActionId: undefined,
      },
    },
  },
  {
    event: "on_chain_stream",
    run_id: "3603c379-38ad-4282-b2fd-521ccd9abc87",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
    },
    name: "LangGraph",
    data: {
      chunk: {
        cleanState: {
          highlightedCode: undefined,
          highlightedText: undefined,
          next: undefined,
          language: undefined,
          artifactLength: undefined,
          regenerateWithEmojis: undefined,
          readingLevel: undefined,
          addComments: undefined,
          addLogs: undefined,
          portLanguage: undefined,
          fixBugs: undefined,
          customQuickActionId: undefined,
        },
      },
    },
  },
  {
    event: "on_chain_end",
    name: "LangGraph",
    run_id: "3603c379-38ad-4282-b2fd-521ccd9abc87",
    tags: [],
    metadata: {
      assistant_id: "b119d2c9-d72d-4459-8eaf-e289d1a678a0",
    },
    data: {
      output: {
        messages: [
          {
            lc_serializable: true,
            lc_kwargs: {
              content: "Help me draft an email to my professor Craig",
              additional_kwargs: {},
              response_metadata: {},
              id: "d443b332-353b-4c1b-9170-ac77c44b0669",
            },
            lc_namespace: ["langchain_core", "messages"],
            content: "Help me draft an email to my professor Craig",
            name: undefined,
            additional_kwargs: {},
            response_metadata: {},
            id: "d443b332-353b-4c1b-9170-ac77c44b0669",
          },
          {
            lc_serializable: true,
            lc_kwargs: {
              content:
                "Your email draft to Professor Craig is ready! If you need any tweaks or additional details, just let me know.",
              additional_kwargs: {},
              response_metadata: {
                usage: {
                  prompt_tokens: 466,
                  completion_tokens: 23,
                  total_tokens: 489,
                  prompt_tokens_details: {
                    cached_tokens: 0,
                    audio_tokens: 0,
                  },
                  completion_tokens_details: {
                    reasoning_tokens: 0,
                    audio_tokens: 0,
                    accepted_prediction_tokens: 0,
                    rejected_prediction_tokens: 0,
                  },
                },
              },
              tool_call_chunks: [],
              id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
              usage_metadata: {
                input_tokens: 466,
                output_tokens: 23,
                total_tokens: 489,
                input_token_details: {
                  audio: 0,
                  cache_read: 0,
                },
                output_token_details: {
                  audio: 0,
                  reasoning: 0,
                },
              },
              tool_calls: [],
              invalid_tool_calls: [],
            },
            lc_namespace: ["langchain_core", "messages"],
            content:
              "Your email draft to Professor Craig is ready! If you need any tweaks or additional details, just let me know.",
            name: undefined,
            additional_kwargs: {},
            response_metadata: {
              usage: {
                prompt_tokens: 466,
                completion_tokens: 23,
                total_tokens: 489,
                prompt_tokens_details: {
                  cached_tokens: 0,
                  audio_tokens: 0,
                },
                completion_tokens_details: {
                  reasoning_tokens: 0,
                  audio_tokens: 0,
                  accepted_prediction_tokens: 0,
                  rejected_prediction_tokens: 0,
                },
              },
            },
            id: "chatcmpl-AS2i6zQQnrJZIl4HqVPjFPieGMTDP",
            tool_calls: [],
            invalid_tool_calls: [],
            tool_call_chunks: [],
            usage_metadata: {
              input_tokens: 466,
              output_tokens: 23,
              total_tokens: 489,
              input_token_details: {
                audio: 0,
                cache_read: 0,
              },
              output_token_details: {
                audio: 0,
                reasoning: 0,
              },
            },
          },
        ],
        artifact: {
          currentIndex: 1,
          contents: [
            {
              index: 1,
              type: "text",
              title: "Email to Professor Craig",
              fullMarkdown:
                "Subject: Request for Guidance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been [briefly explain your situation or what you have been working on], and I would greatly appreciate your insights.\n\nIf possible, I would love to schedule a time to meet with you or discuss this further via email. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]  \n[Your Student ID]  \n[Your Course Name/Code]  \n[Your Contact Information]",
            },
          ],
        },
      },
    },
  },
] as const;
