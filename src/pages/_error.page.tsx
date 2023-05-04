import React from 'react'
import { Result, Button } from 'antd'
import { ResultStatusType } from 'antd/es/result'
import Link from 'next/link'

type ErrorProps = {
  statusCode?: ResultStatusType
}

const CustomErrorPage: React.FC<ErrorProps> = ({ statusCode }) => {
  return (
    <Result
      status={statusCode || 404}
      title={statusCode ? `Error ${statusCode}` : '404'}
      subTitle={statusCode ? 'Oops! Something went wrong.' : 'Page not found.'}
      extra={
        <Link href="/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  )
}

export default CustomErrorPage
