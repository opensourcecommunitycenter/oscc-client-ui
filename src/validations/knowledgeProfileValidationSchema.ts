import { z } from "zod";

// Define experience levels as reusable enums
const experienceLevels = z.enum([1, 2, 3, 4]);

const knowledgeProfileValidationSchema = z.object({
  arabicLiterature: experienceLevels,
  seerahStudies: experienceLevels,
  emotionalIntelligence: experienceLevels,
  criticalThinking: experienceLevels,
});

// Infer TypeScript type
export type LearningProfileValues = z.infer<
  typeof knowledgeProfileValidationSchema
>;

export default knowledgeProfileValidationSchema;
