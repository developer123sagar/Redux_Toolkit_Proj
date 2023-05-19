import React from 'react'
import { Helmet } from 'react-helmet-async'

const SeoHelmet = ({title,content,href}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={content}/>
        <link rel="canonical" href={href}/>
    </Helmet>
  )
}

export default SeoHelmet