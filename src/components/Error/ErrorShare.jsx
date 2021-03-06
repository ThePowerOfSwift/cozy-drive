import React from 'react'
import { translate } from 'cozy-ui/transpiled/react/I18n'
import { Empty } from 'cozy-ui/transpiled/react'
import EmptyIcon from 'components/icons/icon-cloud-wrong.svg'

export const ErrorShare = ({ t, errorType }) => {
  return (
    <Empty
      data-test-id="empty-share"
      icon={EmptyIcon}
      title={t(`Error.${errorType}_title`)}
      text={t(`Error.${errorType}_text`)}
    />
  )
}

export default translate()(ErrorShare)
