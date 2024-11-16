import { z } from "zod";

export type Message = {
  id: string;
  text?: string;
  rawResponse?: Record<string, any>;
  sender: string;
  toolCalls?: ToolCall[];
};

export interface ToolCall {
  id: string;
  name: string;
  args: string;
  result?: any;
}

export type Model = "gpt-4o-mini" | string; // Add other model options as needed

export type UserRules = {
  styleRules: string[];
  contentRules: string[];
};

export interface Artifact {
  id: string;
  contents: ArtifactContent[];
  currentContentIndex: number;
}

export interface ArtifactContent {
  index: number;
  content: string;
  title: string;
  type: ArtifactType;
  language: string;
}

export interface ArtifactV2 {
  id: string;
  contents: (ArtifactMarkdownContent | ArtifactCodeContent)[];
  currentContentIndex: number;
}

export interface MarkdownBlock {
  id: string;
  content: Array<{
    id: string;
    type: string;
    text: string;
    styles: Record<string, any>;
  }>;
  type: string;
}

export interface ArtifactMarkdownContent {
  index: number;
  blocks: MarkdownBlock[];
  title: string;
  type: "text";
}

export interface ArtifactCodeContent {
  index: number;
  code: string;
  title: string;
  type: "code";
  language: ProgrammingLanguageOptions;
}

export type ArtifactType = "code" | "text";

export interface Highlight {
  /**
   * The index of the first character of the highlighted text
   */
  startCharIndex: number;
  /**
   * The index of the last character of the highlighted text
   */
  endCharIndex: number;
}

export type LanguageOptions =
  | "english"
  | "mandarin"
  | "spanish"
  | "french"
  | "hindi";

export type ProgrammingLanguageOptions =
  | "typescript"
  | "javascript"
  | "cpp"
  | "java"
  | "php"
  | "python"
  | "html"
  | "sql"
  | "json"
  | "rust"
  | "xml"
  | "clojure"
  | "csharp"
  | "other";

export const PROGRAMMING_LANGUAGES: Array<{
  language: ProgrammingLanguageOptions;
  label: string;
}> = [
  {
    language: "typescript",
    label: "TypeScript",
  },
  {
    language: "javascript",
    label: "JavaScript",
  },
  {
    language: "cpp",
    label: "C++",
  },
  {
    language: "java",
    label: "Java",
  },
  {
    language: "php",
    label: "PHP",
  },
  {
    language: "python",
    label: "Python",
  },
  {
    language: "html",
    label: "HTML",
  },
  {
    language: "sql",
    label: "SQL",
  },
  {
    language: "json",
    label: "JSON",
  },
  {
    language: "rust",
    label: "Rust",
  },
  {
    language: "xml",
    label: "XML",
  },
  {
    language: "clojure",
    label: "Clojure",
  },
  {
    language: "csharp",
    label: "C#",
  },
  {
    language: "other",
    label: "Other",
  },
];

export type ArtifactLengthOptions = "shortest" | "short" | "long" | "longest";

export type ReadingLevelOptions =
  | "pirate"
  | "child"
  | "teenager"
  | "college"
  | "phd";

export const Reflections = z
  .object({
    /**
     * Style rules to follow for generating content.
     */
    styleRules: z.array(z.string()),
    /**
     * Key content to remember about the user when generating content.
     */
    content: z.array(z.string()),
  })
  .default({ styleRules: [], content: [] });

export type Reflections = z.infer<typeof Reflections>;

export const CustomQuickAction = z.object({
  /**
   * A UUID for the quick action. Used to identify the quick action.
   */
  id: z.string(),
  /**
   * The title of the quick action. Used in the UI
   * to display the quick action.
   */
  title: z.string(),
  /**
   * The prompt to use when the quick action is invoked.
   */
  prompt: z.string(),
  /**
   * Whether or not to include the user's reflections in the prompt.
   */
  includeReflections: z.boolean(),
  /**
   * Whether or not to include the default prefix in the prompt.
   */
  includePrefix: z.boolean(),
  /**
   * Whether or not to include the last 5 (or less) messages in the prompt.
   */
  includeRecentHistory: z.boolean(),
});

export const CustomQuickActions = z.record(CustomQuickAction).default({});
export type CustomQuickActions = z.infer<typeof CustomQuickActions>;

export type CustomQuickAction = z.infer<typeof CustomQuickAction>;

export interface ArtifactV3 {
  currentIndex: number;
  contents: (ArtifactMarkdownV3 | ArtifactCodeV3)[];
}

export interface ArtifactMarkdownV3 {
  index: number;
  type: "text";
  title: string;
  fullMarkdown: string;
}

export interface ArtifactCodeV3 {
  index: number;
  type: "code";
  title: string;
  language: ProgrammingLanguageOptions;
  code: string;
}

export interface CodeHighlight {
  startCharIndex: number;
  endCharIndex: number;
}

export interface TextHighlight {
  fullMarkdown: string;
  markdownBlock: string;
  selectedText: string;
}

export interface ArtifactToolResponse {
  artifact?: string;
  title?: string;
  language?: string;
  type?: string;
}

export interface NewMarkdownToolResponse {
  blocks: Array<{ block_id?: string; new_text?: string }>;
}

export type RewriteArtifactMetaToolResponse =
  | {
      type: "text";
      title?: string;
      language: ProgrammingLanguageOptions;
    }
  | {
      type: "code";
      title: string;
      language: ProgrammingLanguageOptions;
    };

export interface ModelConfig {
  temperature?: number;
  modelProvider: string;
  maxTokens?: number;
  azureConfig?: {
    azureOpenAIApiKey: string;
    azureOpenAIApiInstanceName: string;
    azureOpenAIApiDeploymentName: string;
    azureOpenAIApiVersion: string;
    azureOpenAIBasePath?: string;
  };
}
