import { type UUID, logger } from '@elizaos/core';
import { type NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';
import { BaseDrizzleAdapter } from '../base';
import { DIMENSION_MAP, type EmbeddingDimensionColumn } from '../schema/embedding';
import type { PostgresConnectionManager } from './manager';

/**
 * Adapter class for interacting with a PostgreSQL database.
 * Extends BaseDrizzleAdapter<NodePgDatabase>.
 */
export class PgDatabaseAdapter extends BaseDrizzleAdapter<NodePgDatabase> {
  protected embeddingDimension: EmbeddingDimensionColumn = DIMENSION_MAP[384];
  manager: PostgresConnectionManager;
  /**
   * Constructor for creating a new instance of a class.
   * @param {UUID} agentId - The unique identifier for the agent.
   * @param {PostgresConnectionManager} manager - The Postgres connection manager for the instance.
   */
  constructor(agentId: UUID, manager: PostgresConnectionManager) {
    super(agentId);
    this.manager = manager;
  }

  /**
   * Executes the provided operation with a database connection.
   *
   * @template T
   * @param {() => Promise<T>} operation - The operation to be executed with the database connection.
   * @returns {Promise<T>} A promise that resolves with the result of the operation.
   */
  protected async withDatabase<T>(operation: () => Promise<T>): Promise<T> {
    return await this.withRetry(async () => {
      const client = await this.manager.getClient();
      try {
        const db = drizzle(client);
        this.db = db;

        return await operation();
      } finally {
        client.release();
      }
    });
  }

  /**
   * Asynchronously closes the manager associated with this instance.
   *
   * @returns A Promise that resolves once the manager is closed.
   */
  async close(): Promise<void> {
    await this.manager.close();
  }
}
