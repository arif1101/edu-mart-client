import { notFound } from "next/navigation";
import { mockMentors } from "@/data/mentorsData";
import MentorDetailsClient from "@/components/page/mentor/MentorDetailsClient";

interface MentorDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: MentorDetailsPageProps) {
  const { id } = await params;
  const mentor = mockMentors.find((m) => m.id === id);

  if (!mentor) {
    return {
      title: "Mentor Not Found | EduMart",
    };
  }

  return {
    title: `${mentor.name} - ${mentor.role} | EduMart Mentors`,
    description: mentor.bio,
  };
}

export default async function MentorDetailsPage({ params }: MentorDetailsPageProps) {
  const { id } = await params;
  const mentor = mockMentors.find((m) => m.id === id);

  if (!mentor) {
    notFound();
  }

  return <MentorDetailsClient mentor={mentor} />;
}
