# 使いかた
## 1.ノードをインストール
[node.js](https://nodejs.org/ja/download/)のLTS版をダウンロードし、インストールします。  
（node.jsは一度インストールしたら以降は再度インストールする必要はありません。）

## 2. GitHubデスクトップで、vanillaをクローンする

## 3. `watch.bat`を右クリックで`管理者として実行`を選択
コマンドプロントが起動し、関連モジュールが自動でインストールされた後、sassファイル等の監視を開始します。 
対象ファイルが更新されると自動でコンパイル処理が実行されます。 
コマンドプロンプトを終了すると監視も終了します。 

## ※ `watch.bat`がうまく動作しない場合
[git](https://git-scm.com/)がインストールされていないためうまくいっていない可能性があります。 
[git](https://git-scm.com/)をインストールしてください。

---------------------------------------------------------------------
# CSS / SASS
## 全体指針
- 位置調整などは極力レイアウトクラスを使用する
- デザイン上1セットにみえるコンポーネントでも極力分離してクラスを定義する
- クラスを定義するときは極力ほかの箇所でも汎用的に使えるようにする
- 基本的にIDは使わない
- クラスを乱造しない
- ひとつのクラスあたりのスタイルは最低限にとどめる

## 命名規則
クラス名は汎用性を保つため極力見た目による名前にして、深い意味をもたせないようにする
```
NG: .itemList / .newsList / .ganvList / .newsTitle / .newsDate
OK: .listA / .titleA
```
単語の区切りはキャメールケース
```
NG: .user_name
OK: .userName
```
コンポーネントのクラス名は極力シンプルにしたうえで英大文字で連番を割り振る
```
NG: .userList / .entryButton / .goldBox
OK: .listA / .buttonB / .boxA
```
タグへの直接的なスタイル付けは極力避ける
```css
NG: th { font-weight: bold; }
OK: .tableA th {font-weight: bold; }
```
子要素がデザイン的に親要素セットになっており、どうしても分離できないような場合は以下のようアンダーバー区切りで子要素を定義
```css
.boxA { position: relative; }
.boxA_title { position: absolute; top: -10px; left: -10px; }
```
補助クラスはプレフィックスとして「.with-」または「.without-」を加える
```
.block.with-space { margin-top: 30px; }
.block.without-space { margin-top: 0px; }
```

## ファイル構成
- `_functions.sass`・・・汎用関数
- `_settings.sass`・・・変数設定
- `_mixins.sass`・・・汎用ミックスイン
- `_reset.scss`・・・スタイルリセット
- `_base.sass`・・・bodyやaといった全体のスタイル、その他リセット用のスタイル
- `_layouts.sass`・・・レイアウト組み
- `_components.sass`・・・各種汎用コンポーネント
- `_exceptions.sass`・・・コンポーネントだけでは対処できない場合の例外的スタイル
- `_typography.sass`・・・記事内スタイルなど
- `_utilities.sass`・・・ユーティリティスタイル

## Layoutの定義済みスタイル

- `region`・・・コンテナーセンタリング用クラス
- `block`・・・縦の位置調整用クラス。デフォルトでmargin-topがつく（補助クラス有り）
- `brick`・・・.blockのデフォルトマージンがない版（補助クラス有り）
- `row`・・・カラム用の親クラス（補助クラス有り）
- `col`・・・カラム用の子クラス（補助クラス有り）
- `w-[ num ]px`・・・width定義クラス(px)
- `w-unset-bp-[ s | m | l ]` ・・・ブレークポイントによるwidth解除
- `w-[ num ]per`・・・width定義クラス(%)
- `h-[ num ]px`・・・height定義クラス(px)
- `h-[ num ]per`・・・height定義クラス(%)
- `stick-[ parent | top | left | right | bottom ]-offset-[ size ]` ・・・ 親クラスに対しての絶対値位置指定クラス（offsetで親要素からの位置を調整）
- `fix-[ windowSize | top | left | right | bottom ]-offset-[ size ]` ・・・ ウィンドウサイズに対しての固定位置指定クラス（offsetで親要素からの位置を調整）
- `aspect-[ 16x9 | 4x3 ...]` ・・・ アスペクト比定義クラス

## 各種補助クラス
共通変数
size: [ xxs | xs | s | m | l | xl | xxl ]

### block / brick用補助クラス
- `with-space-[ size ]` ・・・上へのマージン
- `with-space-[ size ]-bp-[ s | m | l ] `・・・ブレークポイントによるwith-spaceの上書き
- `with-[ margin | pad ]-[ size ]`
- `with-[ margin | pad ]-[ vertical | horizon | top | left | right | bottom ]-[ size ]`
- `with-border-[ vertical | horizon | top | left | right | bottom ]`

### row用補助クラス
- `with-separate-[ size ]` ・・・カラム間の間隔
- `with-valign-[ center | top | bottom | stretch ]` ・・・カラムの縦揃え
- `with-align-[ center | left | right | justified ]` ・・・カラムの横揃え
- `with-separator` ・・・カラムの間にボーダーを設置
- `with-wrap-bp-[ s | m | l ]`・・・ブレークポイントによる折り返し

### col用補助クラス
- `with-fit-content`・・・ カラムの幅を子要素に合わせる

## レスポンシブ対応
### メディアクエリーの使用
レスポンシブでメディアクエリーを使用する場合以下ようにのmixinが使用できます。
```scss
.button {
  @include bp-s-or-lower {
    display: none;
  }
}
```
- `bp-[ size ]-or-lower`・・・ブレークポイント以下
- `bp-[ size ]-or-higher`・・・ブレークポイント以上（非推奨）
- `lower-than-bp-[ size ]`・・・ブレークポイント未満（非推奨）
- `higher-than-bp-[ size ]`・・・ブレークポイント超
- `in-bp-s-m`・・・ブレークポイントs超かつm以下（非推奨）
- `in-bp-m-l`・・・ブレークポイントm超かつl以下（非推奨）
- `in-bp-s-l`・・・ブレークポイントs超かつl以下（非推奨）

### Layoutクラスでの調整
`.row`や`.brick`などほとんどのLayoutクラスは以下のように末尾に`-bp-[ size ]`のついたレスポンシブ用の補助クラスを加えることでブレークポイントによってレイアウトを変えることが可能です。
```html
<!-- ブレークポイントS以下の際にmargin-topをxsに -->
<div class="brick with-space with-space-xs-bp-s">
  hoge
</div>

<!-- ブレークポイントm以下の際にカラムを縦並びに -->
<div class="row with-wrap-bp-s">
  <div class="col">hoge</div>
  <div class="col">hoge</div>
</div>

<!-- ブレークポイントs以下の際にwidthをオートに -->
<div class="w-300px w-unset-bp-s"></div>
```
また、以下の一部utilityクラスも同様の文法に対応しています。
- invisible
- visible
- fs-[ size ]
