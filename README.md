# syoka-app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# fireworks
- ターゲット: 炎上プロジェクト
- ジャンル: タスク管理サービス
## 概要
### 基本機能
### 炎上確率の可視化
利用者は各issueに着手するå度にそれがどれほど終わったかを入力する．<br>
(以後，この入力する値を進捗率と呼ぶ)<br>
我々のチームはこの進捗状況を基に終了期間を推測できると考えた．<br>
それによりそこからそのプロジェクトが期限内に終わるのか終わらないのかを判断する．<br>
以下の数式によって得られる **炎上指数** が小さければ小さいほどプロジェクトの炎上確率が高いと推測できる．<br>
```
{炎上指数} = {残り期限}*({進捗率(%)}/{これまでに使用した時間}) - (100(%) - {進捗率(%)})

↓式変形

{炎上指数} = {進捗率(%)} + {残り期限}*({進捗率(%)}/{これまでに使用した時間}) - 100(%)

↓式変形

{炎上指数} = {進捗率(%)} * (1 + {残り期限}/{これまでに使用した時間}) - 100(%)

↓{残り期限} = {締め切り期限} - {現在時刻},
↓{これまでに使用した時間期限} = {現在時刻} - {開始時刻}
↓を代入

{炎上指数} = {進捗率(%)} * (1 + ({締め切り期限}-{現在時刻}) / ({現在時刻}-{開始時刻})) - 100(%)

↓式変形

{炎上指数} = {進捗率(%)} * ((({現在時刻}-{開始時刻}) + ({締め切り期限}-{現在時刻})) / ({現在時刻} - {開始時刻})) - 100(%)

↓式変形

{炎上指数} = {進捗率(%)} * (({締め切り期限}-{開始時刻}) / ({現在時刻}-{開始時刻})) - 100(%)

↓式変形

{炎上指数} = ({締め切り期限}-{開始時刻}) * ({進捗率(%)} / ({現在時刻}-{開始時刻})) - 100(%)

↓式変形

{炎上指数} = ({作業全体}) * ({進捗率(%)} / ({これまでに使用した時間})) - 100(%)
```

上記の炎上指数を炎上する確率を `0~100%` の範囲に収まるように表現したい．<br>
`(-INF,INF)` → `(0,1)` の単調増加を満たす関数である **シグモイド関数** の引数として炎上指数を格納して得られた結果を炎上する確率とする(以後， **炎上確率** と呼ぶ)．
```
{炎上確率(%)} = 100(%) / (1 + e^(-A * {炎上指数} + B))
```
> `A`, `B`はそれぞれ任意定数<br>
A : シグモイド関数の傾き変更する為のパラメーター.<br>
B : よりシグモイド関数を`x`軸方向に水平移動するようにする為のパラメーター．<br>

任意定数 `A` ,`B` はユーザごとに徐々に最適になる形になるように全てのタスクが 期限切れ or 完了 する度にそれぞれ最適な値になるように更新されていく(方法としては **最小二乗法** で求めることを検討中)．<br>

最小二乗法を行うための式変形
```
{炎上確率(%)} = 100(%) / (1 + e^(-A * {炎上指数} + B))

↓式変形

(1 + e^(-A * {炎上指数} + B)) * {炎上確率(%)} =  100(%)

↓式変形

e^(-A * {炎上指数} + B) * {炎上確率(%)} =  100(%) - {炎上確率(%)}

↓式変形

e^(-A * {炎上指数} + B) =  (100(%) - {炎上確率(%)})/{炎上確率(%)}

↓式変形

-A * {炎上指数} + B =  log((100(%) - {炎上確率(%)})/{炎上確率(%)})

↓式変形

-A * {炎上指数} + B =  log(100(%)/{炎上確率(%)} - 1)
```

対数関数 `log()` の値が発散しないようにするために格納する結果は 成功時:`0.1%`(本来は`0%`), 失敗時:`99.9%`(本来は`100%`) と定義する．<br>

また，ユーザーが炎上確率を直感的に理解しやすいように `CSS` のアニメーションで表現する．<br>
### 能力の可視化
issueの終了状態，進捗状況に基づいて各人のスキルシートを発行．<br>
これにより管理職の人々は各人の能力を判別するための指標を得ることが可能．<br>
