import { 
  type User, 
  type InsertUser,
  type ContactSubmission,
  type InsertContact,
  type VideoAsset,
  type InsertVideoAsset,
  type CaseStudy,
  type InsertCaseStudy,
  contactSubmissions,
  users,
  videoAssets,
  caseStudies
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Video Assets
  getVideoAssets(): Promise<VideoAsset[]>;
  getVideoAssetById(id: string): Promise<VideoAsset | undefined>;
  getVideoAssetByPublicId(publicId: string): Promise<VideoAsset | undefined>;
  createVideoAsset(asset: InsertVideoAsset): Promise<VideoAsset>;
  upsertVideoAsset(asset: InsertVideoAsset): Promise<VideoAsset>;
  deleteVideoAsset(id: string): Promise<void>;
  
  // Case Studies
  getCaseStudies(publishedOnly?: boolean): Promise<CaseStudy[]>;
  getCaseStudyById(id: string): Promise<CaseStudy | undefined>;
  getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined>;
  getHeroCaseStudies(): Promise<CaseStudy[]>;
  getShowreel(): Promise<CaseStudy | undefined>;
  createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy>;
  updateCaseStudy(id: string, caseStudy: Partial<InsertCaseStudy>): Promise<CaseStudy>;
  deleteCaseStudy(id: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values(contact)
      .returning();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions);
  }

  // Video Assets
  async getVideoAssets(): Promise<VideoAsset[]> {
    return await db.select().from(videoAssets).orderBy(desc(videoAssets.createdAt));
  }

  async getVideoAssetById(id: string): Promise<VideoAsset | undefined> {
    const [asset] = await db.select().from(videoAssets).where(eq(videoAssets.id, id));
    return asset || undefined;
  }

  async getVideoAssetByPublicId(publicId: string): Promise<VideoAsset | undefined> {
    const [asset] = await db.select().from(videoAssets).where(eq(videoAssets.publicId, publicId));
    return asset || undefined;
  }

  async createVideoAsset(asset: InsertVideoAsset): Promise<VideoAsset> {
    const [created] = await db.insert(videoAssets).values(asset).returning();
    return created;
  }

  async upsertVideoAsset(asset: InsertVideoAsset): Promise<VideoAsset> {
    const existing = await this.getVideoAssetByPublicId(asset.publicId);
    if (existing) {
      const [updated] = await db
        .update(videoAssets)
        .set(asset)
        .where(eq(videoAssets.publicId, asset.publicId))
        .returning();
      return updated;
    }
    return this.createVideoAsset(asset);
  }

  async deleteVideoAsset(id: string): Promise<void> {
    await db.delete(videoAssets).where(eq(videoAssets.id, id));
  }

  // Case Studies
  async getCaseStudies(publishedOnly = true): Promise<CaseStudy[]> {
    if (publishedOnly) {
      return await db
        .select()
        .from(caseStudies)
        .where(and(eq(caseStudies.published, true), eq(caseStudies.isShowreel, false)))
        .orderBy(desc(caseStudies.hero), caseStudies.order);
    }
    return await db
      .select()
      .from(caseStudies)
      .where(eq(caseStudies.isShowreel, false))
      .orderBy(desc(caseStudies.hero), caseStudies.order);
  }

  async getCaseStudyById(id: string): Promise<CaseStudy | undefined> {
    const [study] = await db.select().from(caseStudies).where(eq(caseStudies.id, id));
    return study || undefined;
  }

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
    const [study] = await db.select().from(caseStudies).where(eq(caseStudies.slug, slug));
    return study || undefined;
  }

  async getHeroCaseStudies(): Promise<CaseStudy[]> {
    return await db
      .select()
      .from(caseStudies)
      .where(and(eq(caseStudies.hero, true), eq(caseStudies.published, true), eq(caseStudies.isShowreel, false)))
      .orderBy(caseStudies.order)
      .limit(3);
  }

  async getShowreel(): Promise<CaseStudy | undefined> {
    const [showreel] = await db
      .select()
      .from(caseStudies)
      .where(eq(caseStudies.isShowreel, true));
    return showreel || undefined;
  }

  async createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy> {
    const [created] = await db.insert(caseStudies).values(caseStudy).returning();
    return created;
  }

  async updateCaseStudy(id: string, caseStudy: Partial<InsertCaseStudy>): Promise<CaseStudy> {
    const [updated] = await db
      .update(caseStudies)
      .set(caseStudy)
      .where(eq(caseStudies.id, id))
      .returning();
    return updated;
  }

  async deleteCaseStudy(id: string): Promise<void> {
    await db.delete(caseStudies).where(eq(caseStudies.id, id));
  }
}

export const storage = new DatabaseStorage();
