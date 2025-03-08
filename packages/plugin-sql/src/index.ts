import {
	type DatabaseAdapter,
	type IAgentRuntime,
	type IDatabaseAdapter,
	logger,
	type Plugin,
	type UUID,
} from "@elizaos/core";
import { PgliteDatabaseAdapter } from "./pg-lite/adapter";
import { PGliteClientManager } from "./pg-lite/manager";
import { PgDatabaseAdapter } from "./pg/adapter";
import { PostgresConnectionManager } from "./pg/manager";

// Singleton connection managers
let pgLiteClientManager: PGliteClientManager;
let postgresConnectionManager: PostgresConnectionManager;

export function createDatabaseAdapter(
	config: {
		dataDir?: string;
		postgresUrl?: string;
	},
	agentId: UUID,
): IDatabaseAdapter {
	if (config.postgresUrl) {
		if (!postgresConnectionManager) {
			postgresConnectionManager = new PostgresConnectionManager(
				config.postgresUrl,
			);
		}
		return new PgDatabaseAdapter(agentId, postgresConnectionManager);
	}

	const dataDir = config.dataDir ?? "./elizadb";

	if (!pgLiteClientManager) {
		pgLiteClientManager = new PGliteClientManager({ dataDir });
	}
	return new PgliteDatabaseAdapter(agentId, pgLiteClientManager);
}

const drizzlePlugin: Plugin = {
	name: "drizzle",
	description: "Database adapter plugin using Drizzle ORM",
	init: async (_, runtime: IAgentRuntime) => {
		const config = {
			dataDir: runtime.getSetting("PGLITE_DATA_DIR") ?? "./pglite",
			postgresUrl: runtime.getSetting("POSTGRES_URL"),
		};

		try {
			const db = createDatabaseAdapter(config, runtime.agentId);
			logger.success("Database connection established successfully");
			runtime.registerDatabaseAdapter(db);
		} catch (error) {
			logger.error("Failed to initialize database:", error);
			throw error;
		}
	},
};

export default drizzlePlugin;
