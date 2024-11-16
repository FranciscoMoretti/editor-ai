[
  {
    run_id: "8f6c6a33-f3b2-48f1-ae63-83ab70ebbde5",
    event: "on_chain_start",
    name: "LangGraph",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
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
        artifact: undefined,
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
    run_id: "6f86f762-26fd-4878-8ffa-b6a023da1c74",
    tags: ["graph:step:0", "langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 0,
      langgraph_node: "__start__",
      langgraph_triggers: ["__start__"],
      langgraph_path: ["__pregel_pull", "__start__"],
      langgraph_checkpoint_ns: "__start__:0017a56a-0465-50cb-a140-6f4520749bbb",
      __pregel_resuming: false,
      checkpoint_ns: "__start__:0017a56a-0465-50cb-a140-6f4520749bbb",
      __pregel_task_id: "0017a56a-0465-50cb-a140-6f4520749bbb",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "__start__",
    run_id: "6f86f762-26fd-4878-8ffa-b6a023da1c74",
    tags: ["graph:step:0", "langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 0,
      langgraph_node: "__start__",
      langgraph_triggers: ["__start__"],
      langgraph_path: ["__pregel_pull", "__start__"],
      langgraph_checkpoint_ns: "__start__:0017a56a-0465-50cb-a140-6f4520749bbb",
      __pregel_resuming: false,
      checkpoint_ns: "__start__:0017a56a-0465-50cb-a140-6f4520749bbb",
      __pregel_task_id: "0017a56a-0465-50cb-a140-6f4520749bbb",
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
        artifact: undefined,
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
    run_id: "2f8f96ee-48f3-47cc-9f9c-f021f890add8",
    tags: ["graph:step:1"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
    },
    data: {},
  },
  {
    event: "on_chain_start",
    name: "RunnableSequence",
    run_id: "6f85beef-708c-43fb-9a63-2e9da4f1c857",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
    },
    data: {
      input: [
        {
          role: "user",
          content:
            "You are an assistant tasked with routing the users query based on their most recent message.\nYou should look at this message in isolation and determine where to best route there query.\n\nUse this context about the application and its features when determining where to route to:\n\n<app-context>\nThe name of the application is \"Open Canvas\". Open Canvas is a web application where users have a chat window and a canvas to display an artifact.\nArtifacts can be any sort of writing content, emails, code, or other creative writing work. Think of artifacts as content, or writing you might find on you might find on a blog, Google doc, or other writing platform.\nUsers only have a single artifact per conversation, however they have the ability to go back and fourth between artifact edits/revisions.\nIf a user asks you to generate something completely different from the current artifact, you may do this, as the UI displaying the artifacts will be updated to show whatever they've requested.\nEven if the user goes from a 'text' artifact to a 'code' artifact.\n</app-context>\n\n\nYour options are as follows:\n<options>\n\n- 'generateArtifact': The user has inputted a request which requires generating an artifact.\n- 'replyToGeneralInput': The user submitted a general input which does not require making an update, edit or generating a new artifact. This should ONLY be used if you are ABSOLUTELY sure the user does NOT want to make an edit, update or generate a new artifact.\n</options>\n\nA few of the recent messages in the chat history are:\n<recent-messages>\nhuman: Help me draft an email to my professor Craig\n</recent-messages>\n\nThe user has not generated an artifact yet.",
        },
      ],
    },
  },
  {
    event: "on_llm_start",
    name: "ChatOpenAI",
    run_id: "7c8eca72-b8c8-4a56-a2c4-e8737bbf0cc1",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
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
                  "You are an assistant tasked with routing the users query based on their most recent message.\nYou should look at this message in isolation and determine where to best route there query.\n\nUse this context about the application and its features when determining where to route to:\n\n<app-context>\nThe name of the application is \"Open Canvas\". Open Canvas is a web application where users have a chat window and a canvas to display an artifact.\nArtifacts can be any sort of writing content, emails, code, or other creative writing work. Think of artifacts as content, or writing you might find on you might find on a blog, Google doc, or other writing platform.\nUsers only have a single artifact per conversation, however they have the ability to go back and fourth between artifact edits/revisions.\nIf a user asks you to generate something completely different from the current artifact, you may do this, as the UI displaying the artifacts will be updated to show whatever they've requested.\nEven if the user goes from a 'text' artifact to a 'code' artifact.\n</app-context>\n\n\nYour options are as follows:\n<options>\n\n- 'generateArtifact': The user has inputted a request which requires generating an artifact.\n- 'replyToGeneralInput': The user submitted a general input which does not require making an update, edit or generating a new artifact. This should ONLY be used if you are ABSOLUTELY sure the user does NOT want to make an edit, update or generate a new artifact.\n</options>\n\nA few of the recent messages in the chat history are:\n<recent-messages>\nhuman: Help me draft an email to my professor Craig\n</recent-messages>\n\nThe user has not generated an artifact yet.",
                additional_kwargs: {},
                response_metadata: {},
              },
              lc_namespace: ["langchain_core", "messages"],
              content:
                "You are an assistant tasked with routing the users query based on their most recent message.\nYou should look at this message in isolation and determine where to best route there query.\n\nUse this context about the application and its features when determining where to route to:\n\n<app-context>\nThe name of the application is \"Open Canvas\". Open Canvas is a web application where users have a chat window and a canvas to display an artifact.\nArtifacts can be any sort of writing content, emails, code, or other creative writing work. Think of artifacts as content, or writing you might find on you might find on a blog, Google doc, or other writing platform.\nUsers only have a single artifact per conversation, however they have the ability to go back and fourth between artifact edits/revisions.\nIf a user asks you to generate something completely different from the current artifact, you may do this, as the UI displaying the artifacts will be updated to show whatever they've requested.\nEven if the user goes from a 'text' artifact to a 'code' artifact.\n</app-context>\n\n\nYour options are as follows:\n<options>\n\n- 'generateArtifact': The user has inputted a request which requires generating an artifact.\n- 'replyToGeneralInput': The user submitted a general input which does not require making an update, edit or generating a new artifact. This should ONLY be used if you are ABSOLUTELY sure the user does NOT want to make an edit, update or generate a new artifact.\n</options>\n\nA few of the recent messages in the chat history are:\n<recent-messages>\nhuman: Help me draft an email to my professor Craig\n</recent-messages>\n\nThe user has not generated an artifact yet.",
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
    run_id: "7c8eca72-b8c8-4a56-a2c4-e8737bbf0cc1",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
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
                id: "call_AVKRbtYjgbcI79L2I4Kkswm0",
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  id: "call_AVKRbtYjgbcI79L2I4Kkswm0",
                  type: "function",
                  function: {
                    name: "route_query",
                    arguments: "",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
            response_metadata: {
              usage: {},
            },
            tool_calls: [
              {
                name: "route_query",
                args: {},
                id: "call_AVKRbtYjgbcI79L2I4Kkswm0",
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
                id: "call_AVKRbtYjgbcI79L2I4Kkswm0",
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
          id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
          tool_calls: [
            {
              name: "route_query",
              args: {},
              id: "call_AVKRbtYjgbcI79L2I4Kkswm0",
              type: "tool_call",
            },
          ],
          invalid_tool_calls: [],
          tool_call_chunks: [
            {
              name: "route_query",
              args: "",
              id: "call_AVKRbtYjgbcI79L2I4Kkswm0",
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
    run_id: "7c8eca72-b8c8-4a56-a2c4-e8737bbf0cc1",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
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
            id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
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
          id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
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
    run_id: "7c8eca72-b8c8-4a56-a2c4-e8737bbf0cc1",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
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
            id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
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
          id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
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
    run_id: "7c8eca72-b8c8-4a56-a2c4-e8737bbf0cc1",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
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
            id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
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
          id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
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
    run_id: "7c8eca72-b8c8-4a56-a2c4-e8737bbf0cc1",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
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
            id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
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
          id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
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
    run_id: "7c8eca72-b8c8-4a56-a2c4-e8737bbf0cc1",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
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
            id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
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
          id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
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
    run_id: "7c8eca72-b8c8-4a56-a2c4-e8737bbf0cc1",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
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
            id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
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
          id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
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
    run_id: "7c8eca72-b8c8-4a56-a2c4-e8737bbf0cc1",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
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
            id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
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
          id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
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
    run_id: "7c8eca72-b8c8-4a56-a2c4-e8737bbf0cc1",
    tags: ["seq:step:1"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
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
                  "You are an assistant tasked with routing the users query based on their most recent message.\nYou should look at this message in isolation and determine where to best route there query.\n\nUse this context about the application and its features when determining where to route to:\n\n<app-context>\nThe name of the application is \"Open Canvas\". Open Canvas is a web application where users have a chat window and a canvas to display an artifact.\nArtifacts can be any sort of writing content, emails, code, or other creative writing work. Think of artifacts as content, or writing you might find on you might find on a blog, Google doc, or other writing platform.\nUsers only have a single artifact per conversation, however they have the ability to go back and fourth between artifact edits/revisions.\nIf a user asks you to generate something completely different from the current artifact, you may do this, as the UI displaying the artifacts will be updated to show whatever they've requested.\nEven if the user goes from a 'text' artifact to a 'code' artifact.\n</app-context>\n\n\nYour options are as follows:\n<options>\n\n- 'generateArtifact': The user has inputted a request which requires generating an artifact.\n- 'replyToGeneralInput': The user submitted a general input which does not require making an update, edit or generating a new artifact. This should ONLY be used if you are ABSOLUTELY sure the user does NOT want to make an edit, update or generate a new artifact.\n</options>\n\nA few of the recent messages in the chat history are:\n<recent-messages>\nhuman: Help me draft an email to my professor Craig\n</recent-messages>\n\nThe user has not generated an artifact yet.",
                additional_kwargs: {},
                response_metadata: {},
              },
              lc_namespace: ["langchain_core", "messages"],
              content:
                "You are an assistant tasked with routing the users query based on their most recent message.\nYou should look at this message in isolation and determine where to best route there query.\n\nUse this context about the application and its features when determining where to route to:\n\n<app-context>\nThe name of the application is \"Open Canvas\". Open Canvas is a web application where users have a chat window and a canvas to display an artifact.\nArtifacts can be any sort of writing content, emails, code, or other creative writing work. Think of artifacts as content, or writing you might find on you might find on a blog, Google doc, or other writing platform.\nUsers only have a single artifact per conversation, however they have the ability to go back and fourth between artifact edits/revisions.\nIf a user asks you to generate something completely different from the current artifact, you may do this, as the UI displaying the artifacts will be updated to show whatever they've requested.\nEven if the user goes from a 'text' artifact to a 'code' artifact.\n</app-context>\n\n\nYour options are as follows:\n<options>\n\n- 'generateArtifact': The user has inputted a request which requires generating an artifact.\n- 'replyToGeneralInput': The user submitted a general input which does not require making an update, edit or generating a new artifact. This should ONLY be used if you are ABSOLUTELY sure the user does NOT want to make an edit, update or generate a new artifact.\n</options>\n\nA few of the recent messages in the chat history are:\n<recent-messages>\nhuman: Help me draft an email to my professor Craig\n</recent-messages>\n\nThe user has not generated an artifact yet.",
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
                        id: "call_AVKRbtYjgbcI79L2I4Kkswm0",
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
                      prompt_tokens: 409,
                      completion_tokens: 6,
                      total_tokens: 415,
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
                      id: "call_AVKRbtYjgbcI79L2I4Kkswm0",
                      index: 0,
                      type: "tool_call_chunk",
                    },
                  ],
                  id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
                  usage_metadata: {
                    input_tokens: 409,
                    output_tokens: 6,
                    total_tokens: 415,
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
                      id: "call_AVKRbtYjgbcI79L2I4Kkswm0",
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
                      id: "call_AVKRbtYjgbcI79L2I4Kkswm0",
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
                    prompt_tokens: 409,
                    completion_tokens: 6,
                    total_tokens: 415,
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
                id: "chatcmpl-ATm5nTIOZNjEhgqJNqYE9G3gDNmDD",
                tool_calls: [
                  {
                    name: "route_query",
                    args: {
                      route: "generateArtifact",
                    },
                    id: "call_AVKRbtYjgbcI79L2I4Kkswm0",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
                tool_call_chunks: [
                  {
                    name: "route_query",
                    args: '{"route":"generateArtifact"}',
                    id: "call_AVKRbtYjgbcI79L2I4Kkswm0",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                usage_metadata: {
                  input_tokens: 409,
                  output_tokens: 6,
                  total_tokens: 415,
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
            promptTokens: 409,
            completionTokens: 6,
            totalTokens: 415,
          },
        },
      },
    },
  },
  {
    event: "on_parser_start",
    name: "JsonOutputKeyToolsParser",
    run_id: "fbe63588-3952-487e-a09b-ed22d9272b2c",
    tags: ["seq:step:2"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
    },
    data: {},
  },
  {
    event: "on_parser_end",
    name: "JsonOutputKeyToolsParser",
    run_id: "fbe63588-3952-487e-a09b-ed22d9272b2c",
    tags: ["seq:step:2"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
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
    run_id: "6f85beef-708c-43fb-9a63-2e9da4f1c857",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
    },
    data: {
      input: [
        {
          role: "user",
          content:
            "You are an assistant tasked with routing the users query based on their most recent message.\nYou should look at this message in isolation and determine where to best route there query.\n\nUse this context about the application and its features when determining where to route to:\n\n<app-context>\nThe name of the application is \"Open Canvas\". Open Canvas is a web application where users have a chat window and a canvas to display an artifact.\nArtifacts can be any sort of writing content, emails, code, or other creative writing work. Think of artifacts as content, or writing you might find on you might find on a blog, Google doc, or other writing platform.\nUsers only have a single artifact per conversation, however they have the ability to go back and fourth between artifact edits/revisions.\nIf a user asks you to generate something completely different from the current artifact, you may do this, as the UI displaying the artifacts will be updated to show whatever they've requested.\nEven if the user goes from a 'text' artifact to a 'code' artifact.\n</app-context>\n\n\nYour options are as follows:\n<options>\n\n- 'generateArtifact': The user has inputted a request which requires generating an artifact.\n- 'replyToGeneralInput': The user submitted a general input which does not require making an update, edit or generating a new artifact. This should ONLY be used if you are ABSOLUTELY sure the user does NOT want to make an edit, update or generate a new artifact.\n</options>\n\nA few of the recent messages in the chat history are:\n<recent-messages>\nhuman: Help me draft an email to my professor Craig\n</recent-messages>\n\nThe user has not generated an artifact yet.",
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
    run_id: "85298ec9-79eb-4394-b3a2-c6dda4fa6858",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,generatePath>",
    run_id: "85298ec9-79eb-4394-b3a2-c6dda4fa6858",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
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
    run_id: "be45c98a-1165-47a3-bffe-2817b19902f1",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "ChannelWrite<generateArtifact>",
    run_id: "be45c98a-1165-47a3-bffe-2817b19902f1",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
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
    run_id: "2f8f96ee-48f3-47cc-9f9c-f021f890add8",
    tags: ["graph:step:1"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 1,
      langgraph_node: "generatePath",
      langgraph_triggers: ["__start__:generatePath"],
      langgraph_path: ["__pregel_pull", "generatePath"],
      langgraph_checkpoint_ns:
        "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      __pregel_resuming: false,
      __pregel_task_id: "9c98f4e9-967e-5cc8-91c0-e60757d380c3",
      checkpoint_ns: "generatePath:9c98f4e9-967e-5cc8-91c0-e60757d380c3",
    },
    data: {
      output: {
        next: "generateArtifact",
      },
    },
  },
  {
    event: "on_chain_stream",
    run_id: "8f6c6a33-f3b2-48f1-ae63-83ab70ebbde5",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
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
    run_id: "c814954c-2164-4a75-a8f3-ff42886a3835",
    tags: ["graph:step:2"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
    },
    data: {},
  },
  {
    event: "on_llm_start",
    name: "generate_artifact",
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                  "You are an AI assistant tasked with generating a new artifact based on the users request.\nEnsure you use markdown syntax when appropriate, as the text you generate will be rendered in markdown.\n  \nUse the full chat history as context when generating the artifact.\n\nFollow these rules and guidelines:\n<rules-guidelines>\n- Do not wrap it in any XML tags you see in this prompt.\n- If writing code, do not add inline comments unless the user has specifically requested them. This is very important as we don't want to clutter the code.\n- Do NOT include triple backticks when generating code. The code should be in plain text.\n</rules-guidelines>\n\nYou also have the following reflections on style guidelines and general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>\n",
                additional_kwargs: {},
                response_metadata: {},
              },
              lc_namespace: ["langchain_core", "messages"],
              content:
                "You are an AI assistant tasked with generating a new artifact based on the users request.\nEnsure you use markdown syntax when appropriate, as the text you generate will be rendered in markdown.\n  \nUse the full chat history as context when generating the artifact.\n\nFollow these rules and guidelines:\n<rules-guidelines>\n- Do not wrap it in any XML tags you see in this prompt.\n- If writing code, do not add inline comments unless the user has specifically requested them. This is very important as we don't want to clutter the code.\n- Do NOT include triple backticks when generating code. The code should be in plain text.\n</rules-guidelines>\n\nYou also have the following reflections on style guidelines and general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>\n",
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
                id: "e6eca189-7e55-4298-aa07-43557d3add10",
              },
              lc_namespace: ["langchain_core", "messages"],
              content: "Help me draft an email to my professor Craig",
              name: undefined,
              additional_kwargs: {},
              response_metadata: {},
              id: "e6eca189-7e55-4298-aa07-43557d3add10",
            },
          ],
        ],
      },
    },
  },
  {
    event: "on_llm_stream",
    name: "generate_artifact",
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                id: "call_fx2wpwUR6WQuyNN1bCG3P4MK",
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  id: "call_fx2wpwUR6WQuyNN1bCG3P4MK",
                  type: "function",
                  function: {
                    name: "generate_artifact",
                    arguments: "",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [
              {
                name: "generate_artifact",
                args: {},
                id: "call_fx2wpwUR6WQuyNN1bCG3P4MK",
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
                id: "call_fx2wpwUR6WQuyNN1bCG3P4MK",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [
            {
              name: "generate_artifact",
              args: {},
              id: "call_fx2wpwUR6WQuyNN1bCG3P4MK",
              type: "tool_call",
            },
          ],
          invalid_tool_calls: [],
          tool_call_chunks: [
            {
              name: "generate_artifact",
              args: "",
              id: "call_fx2wpwUR6WQuyNN1bCG3P4MK",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " Assistance",
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
                    arguments: " Assistance",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " Assistance",
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
                  arguments: " Assistance",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " Assistance",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " Assistance",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " struggling",
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
                    arguments: " struggling",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " struggling",
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
                  arguments: " struggling",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " struggling",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " struggling",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " explanation",
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
                    arguments: " explanation",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " explanation",
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
                  arguments: " explanation",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " explanation",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " explanation",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " of",
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
                    arguments: " of",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " of",
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
                  arguments: " of",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " of",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " of",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " the",
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
                    arguments: " the",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " the",
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
                  arguments: " the",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " the",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " the",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " issue",
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
                    arguments: " issue",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " issue",
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
                  arguments: " issue",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " issue",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " issue",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " believe",
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
                    arguments: " believe",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " believe",
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
                  arguments: " believe",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " believe",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " believe",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " expertise",
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
                    arguments: " expertise",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " expertise",
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
                  arguments: " expertise",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " expertise",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " expertise",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " help",
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
                    arguments: " help",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " help",
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
                  arguments: " help",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " help",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " help",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " me",
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
                    arguments: " me",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " me",
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
                  arguments: " me",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " me",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " me",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " understand",
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
                    arguments: " understand",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " understand",
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
                  arguments: " understand",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " understand",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " understand",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " it",
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
                    arguments: " it",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " it",
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
                  arguments: " it",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " it",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " it",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " better",
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
                    arguments: " better",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " better",
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
                  arguments: " better",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " better",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " better",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " the",
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
                    arguments: " the",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " the",
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
                  arguments: " the",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " the",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " the",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " opportunity",
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
                    arguments: " opportunity",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " opportunity",
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
                  arguments: " opportunity",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " opportunity",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " opportunity",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " during",
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
                    arguments: " during",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " during",
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
                  arguments: " during",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " during",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " during",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " office",
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
                    arguments: " office",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " office",
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
                  arguments: " office",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " office",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " office",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " hours",
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
                    arguments: " hours",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " hours",
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
                  arguments: " hours",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " hours",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " hours",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " at",
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
                    arguments: " at",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " at",
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
                  arguments: " at",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " at",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " at",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " that",
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
                    arguments: " that",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " that",
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
                  arguments: " that",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " that",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " that",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " is",
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
                    arguments: " is",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " is",
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
                  arguments: " is",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " is",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " is",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: " convenient",
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
                    arguments: " convenient",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: " convenient",
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
                  arguments: " convenient",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: " convenient",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: " convenient",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: "]\\",
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
                    arguments: "]\\",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "]\\",
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
                  arguments: "]\\",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "]\\",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "]\\",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: "]\\",
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
                    arguments: "]\\",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "]\\",
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
                  arguments: "]\\",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "]\\",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "]\\",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                args: "Program",
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
                    arguments: "Program",
                  },
                },
              ],
            },
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [
              {
                name: undefined,
                args: "Program",
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
                  arguments: "Program",
                },
              },
            ],
          },
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
          tool_calls: [],
          invalid_tool_calls: [
            {
              name: undefined,
              args: "Program",
              id: undefined,
              error: "Malformed args.",
              type: "invalid_tool_call",
            },
          ],
          tool_call_chunks: [
            {
              name: undefined,
              args: "Program",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
          system_fingerprint: "fp_9b78b61c52",
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
          id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
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
    run_id: "f05729ff-c607-415b-b7ab-b3e980c2b942",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                  "You are an AI assistant tasked with generating a new artifact based on the users request.\nEnsure you use markdown syntax when appropriate, as the text you generate will be rendered in markdown.\n  \nUse the full chat history as context when generating the artifact.\n\nFollow these rules and guidelines:\n<rules-guidelines>\n- Do not wrap it in any XML tags you see in this prompt.\n- If writing code, do not add inline comments unless the user has specifically requested them. This is very important as we don't want to clutter the code.\n- Do NOT include triple backticks when generating code. The code should be in plain text.\n</rules-guidelines>\n\nYou also have the following reflections on style guidelines and general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>\n",
                additional_kwargs: {},
                response_metadata: {},
              },
              lc_namespace: ["langchain_core", "messages"],
              content:
                "You are an AI assistant tasked with generating a new artifact based on the users request.\nEnsure you use markdown syntax when appropriate, as the text you generate will be rendered in markdown.\n  \nUse the full chat history as context when generating the artifact.\n\nFollow these rules and guidelines:\n<rules-guidelines>\n- Do not wrap it in any XML tags you see in this prompt.\n- If writing code, do not add inline comments unless the user has specifically requested them. This is very important as we don't want to clutter the code.\n- Do NOT include triple backticks when generating code. The code should be in plain text.\n</rules-guidelines>\n\nYou also have the following reflections on style guidelines and general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>\n",
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
                id: "e6eca189-7e55-4298-aa07-43557d3add10",
              },
              lc_namespace: ["langchain_core", "messages"],
              content: "Help me draft an email to my professor Craig",
              name: undefined,
              additional_kwargs: {},
              response_metadata: {},
              id: "e6eca189-7e55-4298-aa07-43557d3add10",
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
                system_fingerprint: "fp_9b78b61c52",
              },
              message: {
                lc_serializable: true,
                lc_kwargs: {
                  content: "",
                  additional_kwargs: {
                    tool_calls: [
                      {
                        index: 0,
                        id: "call_fx2wpwUR6WQuyNN1bCG3P4MK",
                        type: "function",
                        function: {
                          name: "generate_artifact",
                          arguments:
                            '{"type":"text","language":"other","artifact":"Subject: Request for Assistance\\n\\nDear Professor Craig,\\n\\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been struggling with [brief explanation of the issue or topic], and I believe your expertise would greatly help me understand it better.\\n\\nIf possible, I would appreciate the opportunity to meet with you during your office hours or at a time that is convenient for you. Thank you for your time and assistance.\\n\\nBest regards,\\n\\n[Your Name]\\n[Your Student ID]\\n[Your Course/Program]","title":"Email to Professor Craig"}',
                        },
                      },
                    ],
                  },
                  response_metadata: {
                    usage: {
                      prompt_tokens: 395,
                      completion_tokens: 141,
                      total_tokens: 536,
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
                      args: '{"type":"text","language":"other","artifact":"Subject: Request for Assistance\\n\\nDear Professor Craig,\\n\\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been struggling with [brief explanation of the issue or topic], and I believe your expertise would greatly help me understand it better.\\n\\nIf possible, I would appreciate the opportunity to meet with you during your office hours or at a time that is convenient for you. Thank you for your time and assistance.\\n\\nBest regards,\\n\\n[Your Name]\\n[Your Student ID]\\n[Your Course/Program]","title":"Email to Professor Craig"}',
                      id: "call_fx2wpwUR6WQuyNN1bCG3P4MK",
                      index: 0,
                      type: "tool_call_chunk",
                    },
                  ],
                  id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
                  usage_metadata: {
                    input_tokens: 395,
                    output_tokens: 141,
                    total_tokens: 536,
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
                          "Subject: Request for Assistance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been struggling with [brief explanation of the issue or topic], and I believe your expertise would greatly help me understand it better.\n\nIf possible, I would appreciate the opportunity to meet with you during your office hours or at a time that is convenient for you. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]\n[Your Student ID]\n[Your Course/Program]",
                        title: "Email to Professor Craig",
                      },
                      id: "call_fx2wpwUR6WQuyNN1bCG3P4MK",
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
                      id: "call_fx2wpwUR6WQuyNN1bCG3P4MK",
                      type: "function",
                      function: {
                        name: "generate_artifact",
                        arguments:
                          '{"type":"text","language":"other","artifact":"Subject: Request for Assistance\\n\\nDear Professor Craig,\\n\\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been struggling with [brief explanation of the issue or topic], and I believe your expertise would greatly help me understand it better.\\n\\nIf possible, I would appreciate the opportunity to meet with you during your office hours or at a time that is convenient for you. Thank you for your time and assistance.\\n\\nBest regards,\\n\\n[Your Name]\\n[Your Student ID]\\n[Your Course/Program]","title":"Email to Professor Craig"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 395,
                    completion_tokens: 141,
                    total_tokens: 536,
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
                id: "chatcmpl-ATm5ppbdOpJVvNPmBfJLyxy5hFSiF",
                tool_calls: [
                  {
                    name: "generate_artifact",
                    args: {
                      type: "text",
                      language: "other",
                      artifact:
                        "Subject: Request for Assistance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been struggling with [brief explanation of the issue or topic], and I believe your expertise would greatly help me understand it better.\n\nIf possible, I would appreciate the opportunity to meet with you during your office hours or at a time that is convenient for you. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]\n[Your Student ID]\n[Your Course/Program]",
                      title: "Email to Professor Craig",
                    },
                    id: "call_fx2wpwUR6WQuyNN1bCG3P4MK",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
                tool_call_chunks: [
                  {
                    name: "generate_artifact",
                    args: '{"type":"text","language":"other","artifact":"Subject: Request for Assistance\\n\\nDear Professor Craig,\\n\\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been struggling with [brief explanation of the issue or topic], and I believe your expertise would greatly help me understand it better.\\n\\nIf possible, I would appreciate the opportunity to meet with you during your office hours or at a time that is convenient for you. Thank you for your time and assistance.\\n\\nBest regards,\\n\\n[Your Name]\\n[Your Student ID]\\n[Your Course/Program]","title":"Email to Professor Craig"}',
                    id: "call_fx2wpwUR6WQuyNN1bCG3P4MK",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                usage_metadata: {
                  input_tokens: 395,
                  output_tokens: 141,
                  total_tokens: 536,
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
            promptTokens: 395,
            completionTokens: 141,
            totalTokens: 536,
          },
        },
      },
    },
  },
  {
    event: "on_chain_start",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,generateArtifact>",
    run_id: "8a81e935-16c4-41db-b206-1dc16607d978",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,generateArtifact>",
    run_id: "8a81e935-16c4-41db-b206-1dc16607d978",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                "Subject: Request for Assistance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been struggling with [brief explanation of the issue or topic], and I believe your expertise would greatly help me understand it better.\n\nIf possible, I would appreciate the opportunity to meet with you during your office hours or at a time that is convenient for you. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]\n[Your Student ID]\n[Your Course/Program]",
            },
          ],
        },
      },
    },
  },
  {
    event: "on_chain_end",
    name: "generateArtifact",
    run_id: "c814954c-2164-4a75-a8f3-ff42886a3835",
    tags: ["graph:step:2"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 2,
      langgraph_node: "generateArtifact",
      langgraph_triggers: ["__pregel_push"],
      langgraph_path: ["__pregel_push", 0],
      langgraph_checkpoint_ns:
        "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      __pregel_resuming: false,
      __pregel_task_id: "b442b0b3-5b32-5bc5-9176-763ebfb74d32",
      checkpoint_ns: "generateArtifact:b442b0b3-5b32-5bc5-9176-763ebfb74d32",
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
                "Subject: Request for Assistance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been struggling with [brief explanation of the issue or topic], and I believe your expertise would greatly help me understand it better.\n\nIf possible, I would appreciate the opportunity to meet with you during your office hours or at a time that is convenient for you. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]\n[Your Student ID]\n[Your Course/Program]",
            },
          ],
        },
      },
    },
  },
  {
    event: "on_chain_stream",
    run_id: "8f6c6a33-f3b2-48f1-ae63-83ab70ebbde5",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
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
                  "Subject: Request for Assistance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been struggling with [brief explanation of the issue or topic], and I believe your expertise would greatly help me understand it better.\n\nIf possible, I would appreciate the opportunity to meet with you during your office hours or at a time that is convenient for you. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]\n[Your Student ID]\n[Your Course/Program]",
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
    run_id: "253de028-08ad-4359-8b28-4b515144e6b7",
    tags: ["graph:step:3"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
    },
    data: {},
  },
  {
    event: "on_llm_start",
    name: "ChatOpenAI",
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
                  "You are an AI assistant tasked with generating a followup to the artifact the user just generated.\nThe context is you're having a conversation with the user, and you've just generated an artifact for them. Now you should follow up with a message that notifies them you're done. Make this message creative!\n\nI've provided some examples of what your followup might be, but please feel free to get creative here!\n\n<examples>\n\n<example id=\"1\">\nHere's a comedic twist on your poem about Bernese Mountain dogs. Let me know if this captures the humor you were aiming for, or if you'd like me to adjust anything!\n</example>\n\n<example id=\"2\">\nHere's a poem celebrating the warmth and gentle nature of pandas. Let me know if you'd like any adjustments or a different style!\n</example>\n\n<example id=\"3\">\nDoes this capture what you had in mind, or is there a different direction you'd like to explore?\n</example>\n\n</examples>\n\nHere is the artifact you generated:\n<artifact>\nSubject: Request for Assistance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been struggling with [brief explanation of the issue or topic], and I believe your expertise would greatly help me understand it better.\n\nIf possible, I would appreciate the opportunity to meet with you during your office hours or at a time that is convenient for you. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]\n[Your Student ID]\n[Your Course/Program]\n</artifact>\n\nYou also have the following reflections on general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>\n\nFinally, here is the chat history between you and the user:\n<conversation>\n<human>\nHelp me draft an email to my professor Craig\n</human>\n</conversation>\n\nThis message should be very short. Never generate more than 2-3 short sentences. Your tone should be somewhat formal, but still friendly. Remember, you're an AI assistant.\n\nDo NOT include any tags, or extra text before or after your response. Do NOT prefix your response. Your response to this message should ONLY contain the description/followup message.",
                additional_kwargs: {},
                response_metadata: {},
              },
              lc_namespace: ["langchain_core", "messages"],
              content:
                "You are an AI assistant tasked with generating a followup to the artifact the user just generated.\nThe context is you're having a conversation with the user, and you've just generated an artifact for them. Now you should follow up with a message that notifies them you're done. Make this message creative!\n\nI've provided some examples of what your followup might be, but please feel free to get creative here!\n\n<examples>\n\n<example id=\"1\">\nHere's a comedic twist on your poem about Bernese Mountain dogs. Let me know if this captures the humor you were aiming for, or if you'd like me to adjust anything!\n</example>\n\n<example id=\"2\">\nHere's a poem celebrating the warmth and gentle nature of pandas. Let me know if you'd like any adjustments or a different style!\n</example>\n\n<example id=\"3\">\nDoes this capture what you had in mind, or is there a different direction you'd like to explore?\n</example>\n\n</examples>\n\nHere is the artifact you generated:\n<artifact>\nSubject: Request for Assistance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been struggling with [brief explanation of the issue or topic], and I believe your expertise would greatly help me understand it better.\n\nIf possible, I would appreciate the opportunity to meet with you during your office hours or at a time that is convenient for you. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]\n[Your Student ID]\n[Your Course/Program]\n</artifact>\n\nYou also have the following reflections on general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>\n\nFinally, here is the chat history between you and the user:\n<conversation>\n<human>\nHelp me draft an email to my professor Craig\n</human>\n</conversation>\n\nThis message should be very short. Never generate more than 2-3 short sentences. Your tone should be somewhat formal, but still friendly. Remember, you're an AI assistant.\n\nDo NOT include any tags, or extra text before or after your response. Do NOT prefix your response. Your response to this message should ONLY contain the description/followup message.",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: "I've",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: "I've",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: "I've",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " crafted",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " crafted",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " crafted",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " your",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " your",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " your",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " for",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " for",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " for",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " Let",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " Let",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " Let",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " if",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " if",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " if",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " it",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " it",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " it",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " conveys",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " conveys",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " conveys",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " your",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " your",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " your",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " request",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " request",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " request",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " clearly",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " clearly",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " clearly",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " if",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " if",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " if",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " you'd",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " you'd",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " you'd",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " like",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " like",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " like",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      ls_provider: "openai",
      ls_model_name: "gpt-4o-mini",
      ls_model_type: "chat",
      ls_temperature: 0.5,
      ls_max_tokens: 250,
      ls_stop: undefined,
    },
    data: {
      chunk: {
        text: " make",
        generationInfo: {
          prompt: 0,
          completion: 0,
        },
        message: {
          lc_serializable: true,
          lc_kwargs: {
            content: " make",
            tool_call_chunks: [],
            additional_kwargs: {},
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            response_metadata: {
              usage: {},
            },
            tool_calls: [],
            invalid_tool_calls: [],
            usage_metadata: undefined,
          },
          lc_namespace: ["langchain_core", "messages"],
          content: " make",
          name: undefined,
          additional_kwargs: {},
          response_metadata: {
            usage: {},
          },
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
          id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
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
    run_id: "e550a163-5836-46aa-bc42-74c91b29f1cb",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
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
                  "You are an AI assistant tasked with generating a followup to the artifact the user just generated.\nThe context is you're having a conversation with the user, and you've just generated an artifact for them. Now you should follow up with a message that notifies them you're done. Make this message creative!\n\nI've provided some examples of what your followup might be, but please feel free to get creative here!\n\n<examples>\n\n<example id=\"1\">\nHere's a comedic twist on your poem about Bernese Mountain dogs. Let me know if this captures the humor you were aiming for, or if you'd like me to adjust anything!\n</example>\n\n<example id=\"2\">\nHere's a poem celebrating the warmth and gentle nature of pandas. Let me know if you'd like any adjustments or a different style!\n</example>\n\n<example id=\"3\">\nDoes this capture what you had in mind, or is there a different direction you'd like to explore?\n</example>\n\n</examples>\n\nHere is the artifact you generated:\n<artifact>\nSubject: Request for Assistance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been struggling with [brief explanation of the issue or topic], and I believe your expertise would greatly help me understand it better.\n\nIf possible, I would appreciate the opportunity to meet with you during your office hours or at a time that is convenient for you. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]\n[Your Student ID]\n[Your Course/Program]\n</artifact>\n\nYou also have the following reflections on general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>\n\nFinally, here is the chat history between you and the user:\n<conversation>\n<human>\nHelp me draft an email to my professor Craig\n</human>\n</conversation>\n\nThis message should be very short. Never generate more than 2-3 short sentences. Your tone should be somewhat formal, but still friendly. Remember, you're an AI assistant.\n\nDo NOT include any tags, or extra text before or after your response. Do NOT prefix your response. Your response to this message should ONLY contain the description/followup message.",
                additional_kwargs: {},
                response_metadata: {},
              },
              lc_namespace: ["langchain_core", "messages"],
              content:
                "You are an AI assistant tasked with generating a followup to the artifact the user just generated.\nThe context is you're having a conversation with the user, and you've just generated an artifact for them. Now you should follow up with a message that notifies them you're done. Make this message creative!\n\nI've provided some examples of what your followup might be, but please feel free to get creative here!\n\n<examples>\n\n<example id=\"1\">\nHere's a comedic twist on your poem about Bernese Mountain dogs. Let me know if this captures the humor you were aiming for, or if you'd like me to adjust anything!\n</example>\n\n<example id=\"2\">\nHere's a poem celebrating the warmth and gentle nature of pandas. Let me know if you'd like any adjustments or a different style!\n</example>\n\n<example id=\"3\">\nDoes this capture what you had in mind, or is there a different direction you'd like to explore?\n</example>\n\n</examples>\n\nHere is the artifact you generated:\n<artifact>\nSubject: Request for Assistance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been struggling with [brief explanation of the issue or topic], and I believe your expertise would greatly help me understand it better.\n\nIf possible, I would appreciate the opportunity to meet with you during your office hours or at a time that is convenient for you. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]\n[Your Student ID]\n[Your Course/Program]\n</artifact>\n\nYou also have the following reflections on general memories/facts about the user to use when generating your response.\n<reflections>\nNo reflections found.\n</reflections>\n\nFinally, here is the chat history between you and the user:\n<conversation>\n<human>\nHelp me draft an email to my professor Craig\n</human>\n</conversation>\n\nThis message should be very short. Never generate more than 2-3 short sentences. Your tone should be somewhat formal, but still friendly. Remember, you're an AI assistant.\n\nDo NOT include any tags, or extra text before or after your response. Do NOT prefix your response. Your response to this message should ONLY contain the description/followup message.",
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
              text: "I've crafted your email to Professor Craig for you! Let me know if it conveys your request clearly or if you'd like to make any tweaks.",
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
                    "I've crafted your email to Professor Craig for you! Let me know if it conveys your request clearly or if you'd like to make any tweaks.",
                  additional_kwargs: {},
                  response_metadata: {
                    usage: {
                      prompt_tokens: 464,
                      completion_tokens: 28,
                      total_tokens: 492,
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
                  id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
                  usage_metadata: {
                    input_tokens: 464,
                    output_tokens: 28,
                    total_tokens: 492,
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
                  "I've crafted your email to Professor Craig for you! Let me know if it conveys your request clearly or if you'd like to make any tweaks.",
                name: undefined,
                additional_kwargs: {},
                response_metadata: {
                  usage: {
                    prompt_tokens: 464,
                    completion_tokens: 28,
                    total_tokens: 492,
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
                id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
                tool_calls: [],
                invalid_tool_calls: [],
                tool_call_chunks: [],
                usage_metadata: {
                  input_tokens: 464,
                  output_tokens: 28,
                  total_tokens: 492,
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
            promptTokens: 464,
            completionTokens: 28,
            totalTokens: 492,
          },
        },
      },
    },
  },
  {
    event: "on_chain_start",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,generateFollowup>",
    run_id: "3e5b184e-8fbc-41d0-9fc2-12df0806d5da",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,generateFollowup>",
    run_id: "3e5b184e-8fbc-41d0-9fc2-12df0806d5da",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
    },
    data: {
      output: {
        messages: [
          {
            lc_serializable: true,
            lc_kwargs: {
              content:
                "I've crafted your email to Professor Craig for you! Let me know if it conveys your request clearly or if you'd like to make any tweaks.",
              additional_kwargs: {},
              response_metadata: {
                usage: {
                  prompt_tokens: 464,
                  completion_tokens: 28,
                  total_tokens: 492,
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
              id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
              usage_metadata: {
                input_tokens: 464,
                output_tokens: 28,
                total_tokens: 492,
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
              "I've crafted your email to Professor Craig for you! Let me know if it conveys your request clearly or if you'd like to make any tweaks.",
            name: undefined,
            additional_kwargs: {},
            response_metadata: {
              usage: {
                prompt_tokens: 464,
                completion_tokens: 28,
                total_tokens: 492,
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            tool_calls: [],
            invalid_tool_calls: [],
            tool_call_chunks: [],
            usage_metadata: {
              input_tokens: 464,
              output_tokens: 28,
              total_tokens: 492,
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
    run_id: "253de028-08ad-4359-8b28-4b515144e6b7",
    tags: ["graph:step:3"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 3,
      langgraph_node: "generateFollowup",
      langgraph_triggers: ["generateArtifact"],
      langgraph_path: ["__pregel_pull", "generateFollowup"],
      langgraph_checkpoint_ns:
        "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
      __pregel_resuming: false,
      __pregel_task_id: "60e2adaf-dbfb-57f1-8725-8e321666e935",
      checkpoint_ns: "generateFollowup:60e2adaf-dbfb-57f1-8725-8e321666e935",
    },
    data: {
      output: {
        messages: [
          {
            lc_serializable: true,
            lc_kwargs: {
              content:
                "I've crafted your email to Professor Craig for you! Let me know if it conveys your request clearly or if you'd like to make any tweaks.",
              additional_kwargs: {},
              response_metadata: {
                usage: {
                  prompt_tokens: 464,
                  completion_tokens: 28,
                  total_tokens: 492,
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
              id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
              usage_metadata: {
                input_tokens: 464,
                output_tokens: 28,
                total_tokens: 492,
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
              "I've crafted your email to Professor Craig for you! Let me know if it conveys your request clearly or if you'd like to make any tweaks.",
            name: undefined,
            additional_kwargs: {},
            response_metadata: {
              usage: {
                prompt_tokens: 464,
                completion_tokens: 28,
                total_tokens: 492,
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            tool_calls: [],
            invalid_tool_calls: [],
            tool_call_chunks: [],
            usage_metadata: {
              input_tokens: 464,
              output_tokens: 28,
              total_tokens: 492,
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
    run_id: "8f6c6a33-f3b2-48f1-ae63-83ab70ebbde5",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
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
                  "I've crafted your email to Professor Craig for you! Let me know if it conveys your request clearly or if you'd like to make any tweaks.",
                additional_kwargs: {},
                response_metadata: {
                  usage: {
                    prompt_tokens: 464,
                    completion_tokens: 28,
                    total_tokens: 492,
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
                id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
                usage_metadata: {
                  input_tokens: 464,
                  output_tokens: 28,
                  total_tokens: 492,
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
                "I've crafted your email to Professor Craig for you! Let me know if it conveys your request clearly or if you'd like to make any tweaks.",
              name: undefined,
              additional_kwargs: {},
              response_metadata: {
                usage: {
                  prompt_tokens: 464,
                  completion_tokens: 28,
                  total_tokens: 492,
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
              id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
              tool_calls: [],
              invalid_tool_calls: [],
              tool_call_chunks: [],
              usage_metadata: {
                input_tokens: 464,
                output_tokens: 28,
                total_tokens: 492,
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
    run_id: "7d83a8e8-52f0-4f70-b575-51691b022ec3",
    tags: ["graph:step:4"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 4,
      langgraph_node: "reflect",
      langgraph_triggers: ["generateFollowup"],
      langgraph_path: ["__pregel_pull", "reflect"],
      langgraph_checkpoint_ns: "reflect:a498ce25-fd1b-5bef-9067-ff874552de18",
      __pregel_resuming: false,
      __pregel_task_id: "a498ce25-fd1b-5bef-9067-ff874552de18",
      checkpoint_ns: "reflect:a498ce25-fd1b-5bef-9067-ff874552de18",
    },
    data: {},
  },
  {
    event: "on_chain_start",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,reflect>",
    run_id: "eb14493b-6b84-49a2-9d9a-0ac2a5a7a35f",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 4,
      langgraph_node: "reflect",
      langgraph_triggers: ["generateFollowup"],
      langgraph_path: ["__pregel_pull", "reflect"],
      langgraph_checkpoint_ns: "reflect:a498ce25-fd1b-5bef-9067-ff874552de18",
      __pregel_resuming: false,
      __pregel_task_id: "a498ce25-fd1b-5bef-9067-ff874552de18",
      checkpoint_ns: "reflect:a498ce25-fd1b-5bef-9067-ff874552de18",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,reflect>",
    run_id: "eb14493b-6b84-49a2-9d9a-0ac2a5a7a35f",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 4,
      langgraph_node: "reflect",
      langgraph_triggers: ["generateFollowup"],
      langgraph_path: ["__pregel_pull", "reflect"],
      langgraph_checkpoint_ns: "reflect:a498ce25-fd1b-5bef-9067-ff874552de18",
      __pregel_resuming: false,
      __pregel_task_id: "a498ce25-fd1b-5bef-9067-ff874552de18",
      checkpoint_ns: "reflect:a498ce25-fd1b-5bef-9067-ff874552de18",
    },
    data: {
      output: {},
    },
  },
  {
    event: "on_chain_end",
    name: "reflect",
    run_id: "7d83a8e8-52f0-4f70-b575-51691b022ec3",
    tags: ["graph:step:4"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 4,
      langgraph_node: "reflect",
      langgraph_triggers: ["generateFollowup"],
      langgraph_path: ["__pregel_pull", "reflect"],
      langgraph_checkpoint_ns: "reflect:a498ce25-fd1b-5bef-9067-ff874552de18",
      __pregel_resuming: false,
      __pregel_task_id: "a498ce25-fd1b-5bef-9067-ff874552de18",
      checkpoint_ns: "reflect:a498ce25-fd1b-5bef-9067-ff874552de18",
    },
    data: {
      output: {},
    },
  },
  {
    event: "on_chain_stream",
    run_id: "8f6c6a33-f3b2-48f1-ae63-83ab70ebbde5",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
    },
    name: "LangGraph",
    data: {
      chunk: {},
    },
  },
  {
    event: "on_chain_start",
    name: "cleanState",
    run_id: "37ecc105-b875-48f4-a64d-bd314b093993",
    tags: ["graph:step:5"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 5,
      langgraph_node: "cleanState",
      langgraph_triggers: ["reflect"],
      langgraph_path: ["__pregel_pull", "cleanState"],
      langgraph_checkpoint_ns:
        "cleanState:d811e573-7be2-5e64-8429-fcd9a2cee666",
      __pregel_resuming: false,
      __pregel_task_id: "d811e573-7be2-5e64-8429-fcd9a2cee666",
      checkpoint_ns: "cleanState:d811e573-7be2-5e64-8429-fcd9a2cee666",
    },
    data: {},
  },
  {
    event: "on_chain_start",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,cleanState>",
    run_id: "f147c4b5-871f-4b93-a44b-3f40685d7c60",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 5,
      langgraph_node: "cleanState",
      langgraph_triggers: ["reflect"],
      langgraph_path: ["__pregel_pull", "cleanState"],
      langgraph_checkpoint_ns:
        "cleanState:d811e573-7be2-5e64-8429-fcd9a2cee666",
      __pregel_resuming: false,
      __pregel_task_id: "d811e573-7be2-5e64-8429-fcd9a2cee666",
      checkpoint_ns: "cleanState:d811e573-7be2-5e64-8429-fcd9a2cee666",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,cleanState>",
    run_id: "f147c4b5-871f-4b93-a44b-3f40685d7c60",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 5,
      langgraph_node: "cleanState",
      langgraph_triggers: ["reflect"],
      langgraph_path: ["__pregel_pull", "cleanState"],
      langgraph_checkpoint_ns:
        "cleanState:d811e573-7be2-5e64-8429-fcd9a2cee666",
      __pregel_resuming: false,
      __pregel_task_id: "d811e573-7be2-5e64-8429-fcd9a2cee666",
      checkpoint_ns: "cleanState:d811e573-7be2-5e64-8429-fcd9a2cee666",
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
    event: "on_chain_start",
    name: "ChannelWrite<branch:cleanState:conditionallyGenerateTitle:generateTitle>",
    run_id: "b0109dc4-c081-40cc-9132-4ceb92fb2f7d",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 5,
      langgraph_node: "cleanState",
      langgraph_triggers: ["reflect"],
      langgraph_path: ["__pregel_pull", "cleanState"],
      langgraph_checkpoint_ns:
        "cleanState:d811e573-7be2-5e64-8429-fcd9a2cee666",
      __pregel_resuming: false,
      __pregel_task_id: "d811e573-7be2-5e64-8429-fcd9a2cee666",
      checkpoint_ns: "cleanState:d811e573-7be2-5e64-8429-fcd9a2cee666",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "ChannelWrite<branch:cleanState:conditionallyGenerateTitle:generateTitle>",
    run_id: "b0109dc4-c081-40cc-9132-4ceb92fb2f7d",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 5,
      langgraph_node: "cleanState",
      langgraph_triggers: ["reflect"],
      langgraph_path: ["__pregel_pull", "cleanState"],
      langgraph_checkpoint_ns:
        "cleanState:d811e573-7be2-5e64-8429-fcd9a2cee666",
      __pregel_resuming: false,
      __pregel_task_id: "d811e573-7be2-5e64-8429-fcd9a2cee666",
      checkpoint_ns: "cleanState:d811e573-7be2-5e64-8429-fcd9a2cee666",
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
    run_id: "37ecc105-b875-48f4-a64d-bd314b093993",
    tags: ["graph:step:5"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 5,
      langgraph_node: "cleanState",
      langgraph_triggers: ["reflect"],
      langgraph_path: ["__pregel_pull", "cleanState"],
      langgraph_checkpoint_ns:
        "cleanState:d811e573-7be2-5e64-8429-fcd9a2cee666",
      __pregel_resuming: false,
      __pregel_task_id: "d811e573-7be2-5e64-8429-fcd9a2cee666",
      checkpoint_ns: "cleanState:d811e573-7be2-5e64-8429-fcd9a2cee666",
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
    run_id: "8f6c6a33-f3b2-48f1-ae63-83ab70ebbde5",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
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
    event: "on_chain_start",
    name: "generateTitle",
    run_id: "87ba97ad-9291-4edb-904c-d26bc54889fb",
    tags: ["graph:step:6"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 6,
      langgraph_node: "generateTitle",
      langgraph_triggers: [
        "branch:cleanState:conditionallyGenerateTitle:generateTitle",
      ],
      langgraph_path: ["__pregel_pull", "generateTitle"],
      langgraph_checkpoint_ns:
        "generateTitle:56bdbbcc-1e49-5620-a48e-4f39e13102c2",
      __pregel_resuming: false,
      __pregel_task_id: "56bdbbcc-1e49-5620-a48e-4f39e13102c2",
      checkpoint_ns: "generateTitle:56bdbbcc-1e49-5620-a48e-4f39e13102c2",
    },
    data: {},
  },
  {
    event: "on_chain_start",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,generateTitle>",
    run_id: "98ac45b5-8c00-4925-bb70-cbf9bd92b7ab",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 6,
      langgraph_node: "generateTitle",
      langgraph_triggers: [
        "branch:cleanState:conditionallyGenerateTitle:generateTitle",
      ],
      langgraph_path: ["__pregel_pull", "generateTitle"],
      langgraph_checkpoint_ns:
        "generateTitle:56bdbbcc-1e49-5620-a48e-4f39e13102c2",
      __pregel_resuming: false,
      __pregel_task_id: "56bdbbcc-1e49-5620-a48e-4f39e13102c2",
      checkpoint_ns: "generateTitle:56bdbbcc-1e49-5620-a48e-4f39e13102c2",
    },
    data: {},
  },
  {
    event: "on_chain_end",
    name: "ChannelWrite<messages,highlightedCode,highlightedText,artifact,next,language,artifactLength,regenerateWithEmojis,readingLevel,addComments,addLogs,portLanguage,fixBugs,customQuickActionId,generateTitle>",
    run_id: "98ac45b5-8c00-4925-bb70-cbf9bd92b7ab",
    tags: ["langsmith:hidden"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 6,
      langgraph_node: "generateTitle",
      langgraph_triggers: [
        "branch:cleanState:conditionallyGenerateTitle:generateTitle",
      ],
      langgraph_path: ["__pregel_pull", "generateTitle"],
      langgraph_checkpoint_ns:
        "generateTitle:56bdbbcc-1e49-5620-a48e-4f39e13102c2",
      __pregel_resuming: false,
      __pregel_task_id: "56bdbbcc-1e49-5620-a48e-4f39e13102c2",
      checkpoint_ns: "generateTitle:56bdbbcc-1e49-5620-a48e-4f39e13102c2",
    },
    data: {
      output: {},
    },
  },
  {
    event: "on_chain_end",
    name: "generateTitle",
    run_id: "87ba97ad-9291-4edb-904c-d26bc54889fb",
    tags: ["graph:step:6"],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
      langgraph_step: 6,
      langgraph_node: "generateTitle",
      langgraph_triggers: [
        "branch:cleanState:conditionallyGenerateTitle:generateTitle",
      ],
      langgraph_path: ["__pregel_pull", "generateTitle"],
      langgraph_checkpoint_ns:
        "generateTitle:56bdbbcc-1e49-5620-a48e-4f39e13102c2",
      __pregel_resuming: false,
      __pregel_task_id: "56bdbbcc-1e49-5620-a48e-4f39e13102c2",
      checkpoint_ns: "generateTitle:56bdbbcc-1e49-5620-a48e-4f39e13102c2",
    },
    data: {
      output: {},
    },
  },
  {
    event: "on_chain_stream",
    run_id: "8f6c6a33-f3b2-48f1-ae63-83ab70ebbde5",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
    },
    name: "LangGraph",
    data: {
      chunk: {},
    },
  },
  {
    event: "on_chain_end",
    name: "LangGraph",
    run_id: "8f6c6a33-f3b2-48f1-ae63-83ab70ebbde5",
    tags: [],
    metadata: {
      assistant_id: "7f1b3a58-8631-4436-8c0e-a62608c7b9cc",
      run_id: "4ca26b12-64b1-4988-8b74-bdb6b1519cc6",
      customModelName: "gpt-4o-mini",
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
              id: "e6eca189-7e55-4298-aa07-43557d3add10",
            },
            lc_namespace: ["langchain_core", "messages"],
            content: "Help me draft an email to my professor Craig",
            name: undefined,
            additional_kwargs: {},
            response_metadata: {},
            id: "e6eca189-7e55-4298-aa07-43557d3add10",
          },
          {
            lc_serializable: true,
            lc_kwargs: {
              content:
                "I've crafted your email to Professor Craig for you! Let me know if it conveys your request clearly or if you'd like to make any tweaks.",
              additional_kwargs: {},
              response_metadata: {
                usage: {
                  prompt_tokens: 464,
                  completion_tokens: 28,
                  total_tokens: 492,
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
              id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
              usage_metadata: {
                input_tokens: 464,
                output_tokens: 28,
                total_tokens: 492,
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
              "I've crafted your email to Professor Craig for you! Let me know if it conveys your request clearly or if you'd like to make any tweaks.",
            name: undefined,
            additional_kwargs: {},
            response_metadata: {
              usage: {
                prompt_tokens: 464,
                completion_tokens: 28,
                total_tokens: 492,
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
            id: "chatcmpl-ATm5sFYMuDYKw8LijG5vtxawycGR2",
            tool_calls: [],
            invalid_tool_calls: [],
            tool_call_chunks: [],
            usage_metadata: {
              input_tokens: 464,
              output_tokens: 28,
              total_tokens: 492,
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
                "Subject: Request for Assistance\n\nDear Professor Craig,\n\nI hope this message finds you well. I am writing to seek your guidance regarding [specific topic or question]. I have been struggling with [brief explanation of the issue or topic], and I believe your expertise would greatly help me understand it better.\n\nIf possible, I would appreciate the opportunity to meet with you during your office hours or at a time that is convenient for you. Thank you for your time and assistance.\n\nBest regards,\n\n[Your Name]\n[Your Student ID]\n[Your Course/Program]",
            },
          ],
        },
      },
    },
  },
];
