/**
 * Pulls commits from Pluralsight Flow
 * @param {object} data
 * @param {object} context
 * @return {Promise<{data: any, context: any}>}
 */
export default async function pullCommits(
  data: any,
  context: any
): Promise<{data: any, context: any}> {
  return {data, context};
}
