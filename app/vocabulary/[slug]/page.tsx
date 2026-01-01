import { VOCABULARY_COLLECTIONS } from "@/lib/vocabulary"
import { notFound } from "next/navigation"
import VocabularyCollectionClient from "./vocabulary-collection-client"

export async function generateStaticParams() {
  return VOCABULARY_COLLECTIONS.map((collection) => ({
    slug: collection.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const collection = VOCABULARY_COLLECTIONS.find((c) => c.slug === slug)

  if (!collection) {
    return {}
  }

  return {
    title: `${collection.title} - Aprende Español`,
    description: `Learn ${collection.words.length} Spanish words in the ${collection.title} collection.`,
  }
}

export default async function VocabularyCollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const collection = VOCABULARY_COLLECTIONS.find((c) => c.slug === slug)

  if (!collection) {
    notFound()
  }

  return (
    <VocabularyCollectionClient
      title={collection.title}
      level={collection.level}
      description={collection.description}
      words={collection.words}
    />
  )
}
