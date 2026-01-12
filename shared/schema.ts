import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const projects = pgTable("projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  client: text("client").notNull(),
  sector: text("sector").notNull(),
  serviceType: text("service_type").notNull(),
  description: text("description").notNull(),
  challenge: text("challenge").notNull(),
  approach: text("approach").notNull(),
  outcome: text("outcome").notNull(),
  testimonial: text("testimonial"),
  testimonialAuthor: text("testimonial_author"),
  testimonialRole: text("testimonial_role"),
  vimeoId: text("vimeo_id"),
  thumbnailUrl: text("thumbnail_url"),
  featured: boolean("featured").default(false),
  order: integer("order").default(0),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

export const services = pgTable("services", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  shortDescription: text("short_description").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  whoIsFor: text("who_is_for").notNull(),
  problemSolved: text("problem_solved").notNull(),
  whyFilmmakerLed: text("why_filmmaker_led").notNull(),
  whatMakesDifferent: text("what_makes_different").notNull(),
  deliverables: text("deliverables").notNull(),
  priceFrom: text("price_from"),
  order: integer("order").default(0),
});

export const insertServiceSchema = createInsertSchema(services).omit({ id: true });
export type InsertService = z.infer<typeof insertServiceSchema>;
export type Service = typeof services.$inferSelect;

export const sectors = pgTable("sectors", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  shortDescription: text("short_description").notNull(),
  description: text("description").notNull(),
  industryKnowledge: text("industry_knowledge").notNull(),
  whyDocumentaryWorks: text("why_documentary_works").notNull(),
  experience: text("experience").notNull(),
  testimonial: text("testimonial"),
  testimonialAuthor: text("testimonial_author"),
  testimonialRole: text("testimonial_role"),
  order: integer("order").default(0),
});

export const insertSectorSchema = createInsertSchema(sectors).omit({ id: true });
export type InsertSector = z.infer<typeof insertSectorSchema>;
export type Sector = typeof sectors.$inferSelect;

export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  quote: text("quote").notNull(),
  author: text("author").notNull(),
  role: text("role").notNull(),
  company: text("company").notNull(),
  sector: text("sector"),
  featured: boolean("featured").default(false),
  order: integer("order").default(0),
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ id: true });
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  projectType: text("project_type").notNull(),
  budgetRange: text("budget_range"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({ id: true, createdAt: true });
export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export const journalPosts = pgTable("journal_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  readTime: integer("read_time").notNull(),
  published: boolean("published").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertJournalPostSchema = createInsertSchema(journalPosts).omit({ id: true, createdAt: true });
export type InsertJournalPost = z.infer<typeof insertJournalPostSchema>;
export type JournalPost = typeof journalPosts.$inferSelect;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budgetRange: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
