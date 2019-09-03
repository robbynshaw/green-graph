import React from 'react'

interface TagSummaryProps {
    greeting : string
}

const TagSummary: React.FC<TagSummaryProps> = (props : TagSummaryProps) => {
    const { greeting } = props
  return (
      <h1>{greeting}</h1>
  )
}

export default TagSummary