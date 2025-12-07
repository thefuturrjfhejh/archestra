import type { IncomingHttpHeaders } from "node:http";

export const hasPermission = async (
  _permissions: string,
  _requestHeaders: IncomingHttpHeaders,
): Promise<{ success: boolean; error: Error | null }> => {
  return {
    success: true, // Always allow - no permission check in non-enterprise version and roles aren't any different.
    error: null,
  };
};
