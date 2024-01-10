import { t } from '@lingui/macro'
import cn from 'classnames'
import LazyImage from '@/components/lazy-image'
import styles from './index.module.css'

interface ICreditCrad {
  isCradList?: any // 是否有卡
  cardAlias: string // 卡别名
  cardNo: string // 卡号
  classNames?: string
}
function PinCard(props: ICreditCrad) {
  const { cardAlias, cardNo, isCradList, classNames } = props

  return (
    <div className={cn(styles.scoped, classNames)}>
      <div className={'card'}>
        <div className="my-png">
          <img
            src="https://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5/image/FastPay-logo-grey.svg"
            alt=""
            width="75.97px"
          />
        </div>
        <div className="bgimg"></div>

        <div className="card-number">
          <span className="card-text">{cardNo}</span>
          <span className="btn">{t`features_credit_card_my_card_index_nw6rl87ddc`}</span>
        </div>

        {/* 真 亚马逊专区 */}
        <div className="prefecture">{cardAlias}</div>
        <div className="foot-text">
          <div className="text-date">
            VALID THRU
            <br />
            **/****
          </div>
          <div className="text-cvc">
            CVC
            <br />
            ***
          </div>
        </div>

        <div className="mast-crad2">
          <LazyImage src="https://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5/image/mast-grey.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default PinCard
