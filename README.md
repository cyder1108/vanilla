# 使いかた
## 1.ノードをインストール
[node.js](https://nodejs.org/ja/download/)をダウンロードし、インストールします。  
（node.jsは一度インストールしたら以降は再度インストールする必要はありません。）

## 2. 「watch.bat」を右クリックで「管理者として実行を選択」
関連モジュールが自動でインストールされた後、sassファイル等の監視を開始します。

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
クラス名は汎用性を保つため極力見た目による名前にして、あまり深い意味をもたせないようにする
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
補助クラスはプレフィックスとして「.with-」を加える
```
.block.with-space { margin-top: 30px; }
```

## ファイル構成
- **_functions.sass**・・・汎用関数
- **_settings.sass**・・・変数設定
- **_mixins.sass**・・・汎用ミックスイン
- **_reset.scss**・・・スタイルリセット
- **_base.sass**・・・bodyやaといった全体のスタイル、その他リセット用のスタイル
- **_layouts.sass**・・・レイアウト組み
- **_components.sass**・・・各種汎用コンポーネント
- **_exceptions.sass**・・・コンポーネントだけでは対処できない場合の例外的スタイル
- **_typography.sass**・・・記事内スタイルなど
- **_utilities.sass**・・・ユーティリティスタイル

## Layoutの定義済みスタイル

- **region**・・・コンテナーセンタリング用クラス
- **block**・・・縦の位置調整用クラス。デフォルトでmargin-topがつく
- **brick**・・・.blockのデフォルトマージンがない版
- **row**・・・カラム用の親クラス
- **col**・・・カラム用の子クラス
- **w-[ num ]px**・・・width定義クラス(px)
- **w-[ num ]per**・・・width定義クラス(%)
- **h-[ num ]px**・・・height定義クラス(px)
- **h-[ num ]per**・・・height定義クラス(%)
- **stick-[ parent | top | left | right | bottom ]-offset-[ size ]**・・・ 親クラスに対しての絶対値位置指定クラス（offsetで親要素からの位置を調整）
- **aspect-[*]**・・・ アスペクト比定義クラス

## 各種補助クラス
**共通変数** 
size: [ xxs | xs | s | m | l | xl | xxl ]

### block / brick用補助クラス
- with-space-[ size ] ・・・上へのマージン
- with-[ margin | pad ]-[ size ] 
- with-[ margin | pad ]-[ vertical | horizon | top | left | right | bottom ]-[ size ]
- with-border-[ vertical | horizon | top | left | right | bottom ]

### row用補助クラス
- with-separate-[ size ] ・・・カラム間の間隔
- with-valign-[ center | top | bottom | stretch ] ・・・カラムの縦揃え
- with-align-[ center | left | right | bt] ・・・カラムの横揃え
- with-separator ・・・カラムの間にボーダーを設置

## col用補助クラス
- with-fit-content・・・ カラムの幅を子要素に合わせる
