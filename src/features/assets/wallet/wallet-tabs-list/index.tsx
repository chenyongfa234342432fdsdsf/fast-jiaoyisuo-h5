import { link } from '@/helper/link'
import { getAssetsRechargePageRoutePath, getC2cFastTradePageRoutePath } from '@/helper/route'
import Icon from '@/components/icon'
import { t } from '@lingui/macro'
import { Popup } from '@nbit/vant'
import { useState } from 'react'
import styles from './index.module.css'
import WithdrawAction from '../../common/withdraw-action'

function WalletTabsList() {
  return (
    <>
      <div className={styles.scoped}>
        <WithdrawAction>
          <Icon name="assets_withdrawal" hasTheme />
          <div>{t`assets.withdraw.title`}</div>
        </WithdrawAction>
        <div onClick={() => link(getAssetsRechargePageRoutePath())}>
          <Icon name="assets_deposit" hasTheme />
          <div>{t`features_assets_wallet_wallet_tabs_list_index_ztuued_k6i`}</div>
        </div>
        <div>
          <Icon onClick={() => link(getC2cFastTradePageRoutePath())} name="assets_c2c" hasTheme />
          <div>{t`features_assets_wallet_wallet_tabs_list_index_n0ltwhuqjc`}</div>
        </div>
      </div>
    </>
  )
}

export default WalletTabsList
