export type ApprovalMode = "never" | "on-request" | "on-failure" | "untrusted";

export type SandboxMode = "read-only" | "workspace-write" | "danger-full-access";

export type ModelReasoningEffort = "minimal" | "low" | "medium" | "high" | "xhigh";

export type McpServerConfigValue =
  | string
  | number
  | boolean
  | McpServerConfigValue[]
  | { [key: string]: McpServerConfigValue };

export type McpServerCommonConfig = {
  enabled?: boolean;
  startup_timeout_sec?: number;
  startup_timeout_ms?: number;
  tool_timeout_sec?: number;
  enabled_tools?: string[];
  disabled_tools?: string[];
};

export type McpServerStdioConfig = {
  command: string;
  args?: string[];
  env?: Record<string, string>;
  env_vars?: string[];
  cwd?: string;
  url?: never;
  bearer_token_env_var?: never;
  http_headers?: never;
  env_http_headers?: never;
};

export type McpServerStreamableHttpConfig = {
  url: string;
  bearer_token_env_var?: string;
  http_headers?: Record<string, string>;
  env_http_headers?: Record<string, string>;
  command?: never;
  args?: never;
  env?: never;
  env_vars?: never;
  cwd?: never;
};

export type McpServerConfig = McpServerCommonConfig &
  (McpServerStdioConfig | McpServerStreamableHttpConfig);

export type ThreadOptions = {
  model?: string;
  sandboxMode?: SandboxMode;
  workingDirectory?: string;
  skipGitRepoCheck?: boolean;
  modelReasoningEffort?: ModelReasoningEffort;
  networkAccessEnabled?: boolean;
  webSearchEnabled?: boolean;
  approvalPolicy?: ApprovalMode;
  additionalDirectories?: string[];
  /** Inline MCP server config passed via `--config mcp_servers.<name>=...`. */
  mcpServers?: Record<string, McpServerConfig>;
};
