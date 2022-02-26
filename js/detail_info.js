let detail_info = {
  'html': {
    0: `<div></div>  特殊功能标签之外的万用型标签,谁用谁知道
    <img src="" alt="">  解析图片
    <a href="" target="" download="" hreflang="" media=""></a>  解析地址链接
    <span></span>  用来组合文档中的行内元素
    
    <audio src="" autoplay controls loop muted preload="音频在页面加载时进行加载,
    并预备播放,使用autoplay,则忽略该属性"></audio>  html5音频
    <video src="" autoplay controls loop muted poster="" preload=""></video>  html5视频
    <source src="" type="">  选择它所支持的文件,用来适配视频和音频

    <form action="" method="" id=""></form>  表单
    <label for="" form=""></label>  与框连用
    <input type="text" id="" name="" value="" placeholder="">  框

    <canvas height="" width=""></canvas>  画布
    <script></script>  用于定义客户端脚本

    查找其他标签看所有标签页;
    `,




    1: `常用标签
    <div></div>
    <img src="" alt="">图片
    <a href="" target="" download="" hreflang=""media=""></a>链接
    <span></span>用来组合文档中的行内元素
    <script></script>用于定义客户端脚本
    <audio src="" autoplay controls loop muted preload="音频在页面加载时进行加载,并预备播放,使用 autoplay,则忽略该属性"></audio>音频
    <source src="" type="">选择它所支持的文件
    <video src="" autoplay controls loop muted poster="" preload=""></video>视频
    <track>  	定义在媒体播放器文本轨迹

    表单标签
    <form action="" method="" id=""></form>
    <label for="" form=""></label>
    <input type="text" id="" name="" value="" placeholder="">
    <fieldset disabled form="" name=""></fieldset>可将表单内的相关元素分组
    <legend></legend>legend 元素为 fieldset 元素定义标题(caption)
    <button autofocus disabled form="" formaction="" formenctype=""></button>
    <keygen>*

    列表标签
    <ul></ul>无序列表
    <ol></ol>有序列表
    <li></li>列表项
    <select name="" id=""></select>可创建单选或多选菜单
    <optgroup label=""></optgroup>
    <option value=""></option>定义下拉列表中的一个选项

    表格标签
    <table></table>表格
    <caption></caption>表头
    <tr></tr>
    <th></th>
    <td></td>
    <thead></thead>
    <tbody></tbody>
    <tfoot></tfoot>
    <col>对齐方式
    <colgroup></colgroup>对齐方式
    <dl></dl>自定义列表
    <dt></dt>自定义列表
    <dd></dd>在定义列表中定义条目的定义部分

    画布标签
    <canvas height="" width=""></canvas>
    <svg></svg>

    字体标签
    <b></b>标签规定粗体文本
    <big></big>*标签呈现大号字体效果
    <font></font>*请使用样式代替
    <h1></h1>到<h6></h6>字体大小,可定义标题
    <p></p>一个段落
    <small></small>呈现小号字体效果
    <u></u>为文本添加下划线

    其他可选标签
    <base href="规定页面中所有相对链接的基准 URL" target="在何处打开页面中所有的链接">
    <br>可插入一个简单的换行符
    <datalist></datalist>
    <del></del>
    <s></s>请使用del替代它
    <strike></strike>*请使用del替代它
    <dir></dir>*
    <embed src="" type="" width="" height="">标签定义嵌入的内容,比如插件
    <figcaption></figcaption>应该被置于 "figure" 元素的第一个或最后一个子元素的位置
    <figure></figure>规定独立的流内容(图像,图表,照片,代码等等)
    <header></header>标签定义文档的页眉
    <main></main>对于文档来说应当是唯一的,它不应包含在文档中重复出现的内容,比如侧栏,导航栏,版权信息,站点标志或搜索表单
    <article></article>规定独立的自包含内容
    <aside></aside>内容应该与附近的内容相关
    <nav></nav>定义导航链接的部分
    <section></section>区段
    <footer></footer>标签定义文档或节的页脚
    <frameset></frameset>*
    <noframes></noframes>*位于 frameset 元素内部
    <head></head>head 部分：base, link, meta, script style 以及 title,title 定义文档的标题,它是 head 部分中唯一必需的元素
    <hr>一条水平线
    <i></i>
    <ins></ins>
    <iframe src="" frameborder="0"></iframe>文档内联框架
    <link rel="stylesheet" href="">
    <map name=""></map>图像映射
    <area shape="" coords="" href="" alt="">area 元素永远嵌套在 map 元素内部area 元素可定义图像映射中的区域
    <menu></menu>目前所有主流浏览器都不支持
    <meta>永远位于 head 元素内部
    <noscript></noscript>无法支持脚本
    <object data="" type=""></object>向 HTML 代码添加一个对象
    <param name="" value="">object内部
    <picture></picture>包含两个标签：一个或多个source 标签和一个img 标签,匹配资源
    <pre></pre>常见应用就是用来表示计算机的源代码
    <progress max="" value=""></progress>与 JavaScript 一同使用,来显示任务的进度
    <q></q>定义短的引用
    <sup></sup>文字显示?
    <sub></sub>文字显示?
    <template></template>模板
    <title></title>head唯一要求包含的东西
    <tt></tt>*
    <frame>*`,


    2: `accesskey:规定激活元素的快捷键
    *class:
    contenteditable:规定元素内容是否可编辑
    contextmenu:规定元素的上下文菜单,上下文菜单在用户点击元素时显示5
    data-*:用于存储页面或应用程序的私有定制数据5
    dir:规定元素中内容的文本方向
    draggable:规定元素是否可拖动5
    dropzone:规定在拖动被拖动数据时是否进行复制,移动或链接5
    hidden:规定元素仍未或不再相关5
    *id:
    lang:规定元素内容的语言
    spellcheck:规定是否对元素进行拼写和语法检查5
    *style:
    tabindex:规定元素的 tab 键次序
    title:规定有关元素的额外信息
    translate:规定是否应该翻译元素内容5
    
    常用的只有没注解的那几个`,


    3:
      `私有属性有很多,这里主要记录表单项
    <form>
    accept  MIME_type  HTML5不支持规定服务器接收到的文件的类型(文件是通过文件上传提交的)
    accept-charset character_set  规定服务器可处理的表单数据字符集
    action	URL	 规定当提交表单时向何处发送表单数据
    autocomplete	on/off	规定是否启用表单的自动完成功能
    enctype:
    application/x-www-form-urlencoded
    multipart/form-data
    text/plain	规定在向服务器发送表单数据之前如何对其进行编码(适用于method="post"的情况)
    method:
    get
    post	规定用于发送表单数据的HTTP方法
    name	text	规定表单的名称
    novalidate	novalidate	如果使用该属性,则提交表单时不进行验证
    target:
    _blank
    _self
    _parent
    _top	规定在何处打开action URL
    
    
    <label>
    for	element_id	规定label与哪个表单元素绑定
    form	form_id	 规定label字段所属的一个或多个表单
    

    <input>
    accept
    audio/* video/* image/* MIME_type	规定通过文件上传来提交的文件的类型(只针对type="file")
    align
    left/right/top/middle/bottom	HTML5已废弃,不赞成使用规定图像输入的对齐方式(只针对type="image")
    alt	text	定义图像输入的替代文本(只针对type="image")
    autocomplete
    on/off	autocomplete属性规定<input>元素输入字段是否应该启用自动完成功能
    autofocus	autofocus	属性规定当页面加载时<input>元素应该自动获得焦点
    checked	checked	checked属性规定在页面加载时应该被预先选定的<input>元素(只针对type="checkbox"或者type="radio")
    disabled	disabled	disabled属性规定应该禁用的<input>元素
    form	form_id  form属性规定<input>元素所属的一个或多个表单
    formaction	URL	属性规定当表单提交时处理输入控件的文件的 URL(只针对 type="submit"和type="image")
    formenctype
    application/x-www-form-urlencoded multipart/form-data text/plain	属性规定当表单数据提交到服务器时如何编码(只适合type="submit"和type="image")
    formmethod
    get/post	定义发送表单数据到action URL的HTTP方法(只适合type="submit"和type="image")
    formnovalidate	formnovalidate	formnovalidate属性覆盖<form>元素的novalidate属性
    formtarget
    _blank /_self/_parent/_top framename	规定表示提交表单后在哪里显示接收到响应的名称或关键词(只适合type="submit"和type="image")
    height	pixels	规定<input>元素的高度(只针对type="image")
    list	datalist_id	属性引用<datalist>元素,其中包含<input>元素的预定义选项
    max	number date	属性规定<input>元素的最大值
    maxlength	number	属性规定<input>元素中允许的最大字符数
    min	number date	属性规定<input>元素的最小值
    multiple	multiple	属性规定允许用户输入到<input>元素的多个值
    name	text	name属性规定<input>元素的名称
    pattern	regexp	pattern属性规定用于验证<input>元素的值的正则表达式
    placeholder	text	placeholder属性规定可描述输入<input>字段预期值的简短的提示信息
    readonly	readonly	readonly属性规定输入字段是只读的
    required	required	属性规定必需在提交表单之前填写输入字段
    size	number	size属性规定以字符数计的<input>元素的可见宽度
    src	URL	src属性规定显示为提交按钮的图像的URL(只针对type="image")
    step	number	step属性规定<input>元素的合法数字间隔
    value	text	指定<input>元素value的值
    width	pixels	width属性规定<input>元素的宽度(只针对type="image")
    type:
    button
    checkbox
    file
    hidden
    image
    password
    radio
    reset
    submit
    text
    以下为支持度不高的type属性
    color  选取颜色
    date  从一个日期选择器选择一个日期
    datetime  选择一个日期,UTC 时间
    datetime-local  选择一个日期和时间,无时区
    email  用于应该包含e-mail地址的输入域
    month  允许你选择一个月份
    number  用于应该包含数值的输入域,您还能够设定对所接受的数字的限定:min="1" max="5"
    range  用于应该包含一定范围内数字值的输入域,显示为滑动条
    search  用于搜索域
    tel  电话号码字段
    time  允许你选择一个时间,定义可输入时间控制器,无时区
    url  用于应该包含URL地址的输入域,在提交表单时,会自动验证url域的值
    week  允许你选择周和年,无时区
    
    
    遇到不清楚的就看手册,具体属性还是得靠慢慢记了`,
  },


  'css': {
    0: `width  宽
    min-width  最小宽
    height  高
    min-height  最小高
    border  块级元素边框
    box-sizing  盒子关系
    margin  外边距
    padding  内边距
    background  背景大家族
    color; 设置文本的颜色
    font  字体大家族
    text-align  字体X轴位置
    line-height  字体Y轴位置
    position  定位块级元素
    top  距离外部最近块级元素具有定位盒子的顶部距离,如若没有外级定位盒子,会以body为外级定位
    left  同上,将顶部换为左边
    z-index  定位显示压盖层级
    overflow  子级元素溢出后行为
    vertical-align  调整修复图片,链接底部留白
    resize  是否可拉动大小
    cursor; 规定当指向元素时要显示的鼠标光标


    display; 规定某个HTML元素的显示模式

    flex; flex-grow,flex-shrink以及flex-basis的简写属性
    flex-grow; 规定项目相对于其余项目的增量
    flex-shrink; 规定项目相对于其余项目的减量
    flex-basis; 规定弹性项目的初始长度

    flex-flow; flex-direction和flex-wrap的简写属性
    flex-direction; 规定弹性项目的方向
    flex-wrap; 规定弹性项目是否应该换行

    align-content;  规定弹性容器内的行之间的对齐方式,当项目不使用所有可用空间时
    align-items;  规定弹性容器内部块级元素的对齐方式
    align-self;  规定弹性容器的对齐方式(Y轴)
    justify-content; 规定项目在弹性容器内的对齐方式(X轴),当项目未用到所有可用空间时


    其他需要请查看所有样式
    `,


    1: `::after 在某个元素之后插入内容
  ::before 在某个元素之前插入内容
  ::first-letter 选择某个元素的首字母
  ::first-line 选择某个元素的首行
  ::selection 选择用户选择的元素部分`,


    2: `:active a:active 选择活动的链接
  :checked input:checked 选择每个被选中的input元素
  :disabled input:disabled 选择每个被禁用的input元素
  :empty p:empty 选择没有子元素的每个p元素
  :enabled input:enabled 选择每个已启用的input元素
  :first-child p:first-child 选择作为其父的首个子元素的每个p元素
  :first-of-type p:first-of-type 选择作为其父的首个p元素的每个p元素
  :focus input:focus 选择获得焦点的input元素
  :hover a:hover 选择鼠标悬停其上的链接
  :in-range input:in-range 选择具有指定范围内的值的input元素
  :invalid input:invalid 选择所有具有无效值的 input 元素
  :lang(language) p:lang(it) 选择每个lang属性值以"it"开头的p元素
  :last-child p:last-child 选择作为其父的最后一个子元素的每个p元素
  :last-of-type p:last-of-type 选择作为其父的最后一个p元素的每个p元素
  :link a:link 选择所有未被访问的链接
  :not(selector) :not(p) 选择每个非p元素的元素
  :nth-child(n) p:nth-child(2) 选择作为其父的第二个子元素的每个p元素
  :nth-last-child(n) p:nth-last-child(2) 选择作为父的第二个子元素的每个p元素,从最后一个子元素计数
  :nth-last-of-type(n) p:nth-last-of-type(2) 选择作为父的第二个p元素的每个p元素,从最后一个子元素计数
  :nth-of-type(n) p:nth-of-type(2) 选择作为其父的第二个p元素的每个p元素
  :only-of-type p:only-of-type 选择作为其父的唯一p元素的每个p元素
  :only-child p:only-child 选择作为其父的唯一子元素的p元素
  :optional input:optional 选择不带"required"属性的input元素
  :out-of-range input:out-of-range 选择值在指定范围之外的input元素
  :read-only input:read-only 选择指定了"readonly"属性的input元素
  :read-write input:read-write 选择不带"readonly"属性的input元素
  :required input:required 选择指定了"required"属性的input元素
  :root root 选择元素的根元素
  :target #news:target 选择当前活动的#news元素(单击包含该锚名称的URL)
  :valid input:valid 选择所有具有有效值的input元素
  :visited a:visited 选择所有已访问的链接`,


    3: `文本样式
  font; font-style,font-variant,font-weight,font-size/line-height 以及 font-family 的简写属性
  @font-face; 允许网站下载和使用 "web-safe" 字体以外的其他字体的规则
  font-family; 规定文本的字体族(字体系列)
  font-feature-settings; 允许控制 OpenType 字体中的高级印刷特性
  @font-feature-values; 允许创作者使用 font-variant-alternate 中的通用名来实现在 OpenType 中以不同方式激活的特性
  font-kerning; 控制字距调整信息的使用(字母间距)
  font-language-override; 控制特定语言的字形在字体的使用
  font-size; 规定文本的字体大小
  font-size-adjust; 保持发生字体回退时的可读性
  font-stretch; 从字体系列中选择一个普通的,压缩的或扩展的字体
  font-style; 规定文本的字体样式
  font-synthesis; 控制哪些缺失的字体(粗体或斜体)可以由浏览器合成
  font-variant; 规定是否应该以小型大写字体显示文本
  font-variant-alternates; 控制与 @font-feature-values 中定义的备用名称关联的备用字形的使用
  font-variant-caps; 控制大写字母的备用字形的使用
  font-variant-east-asian; 控制东亚文字(例如中文和日语)的备用字形的使用
  font-variant-ligatures; 控制在适用于元素的文本内容中使用哪些连字和上下文形式
  font-variant-numeric; 控制数字,分数和序号标记的备用字形的使用
  font-variant-position; 控制较小字体的替代字形的使用,这些字形相对于字体基线定位为上标或下标
  font-weight; 规定字体的粗细
  color; 设置文本的颜色
  direction; 规定文本方向/书写方向
  letter-spacing; 增加或减少文本中的字符间距
  line-break; 如何如何/是否换行
  line-height; 设置行高
  text-align; 规定文本的水平对齐方式
  text-align-last; 描述当 text-align 为 "justify" 时,如何在强制换行之前对齐块或行的最后一行
  text-combine-upright; 将多个字符组合到到单个字符的空间中
  text-decoration; 规定文本装饰
  text-decoration-color; 规定文本装饰(text-decoration)的颜色
  text-decoration-line; 规定文本装饰(text-decoration)中的的行类型
  text-decoration-style; 规定文本装饰(text-decoration)中的行样式
  text-indent; 规定文本块(text-block)中的的首行缩进
  text-justify; 规定当 text-align 为 "justify" 时使用的对齐方法
  text-orientation; 定义行中的文本方向
  text-overflow; 规定当文本溢出包含元素时应该发生的情况
  text-shadow; 添加文本阴影
  text-transform; 控制文本的大写
  text-underline-position; 规定使用 text-decoration 属性设置的下划线的位置
  unicode-bidi; 与 direction 属性一起使用,设置或返回是否应覆写文本来支持同一文档中的多种语言
  user-select; 规定是否能选取元素的文本
  white-space; 规定如何处理元素内的空白字符
  word-break; 规定单词到达行末后如何换行
  word-spacing; 增加或减少文本中的单词间距
  word-wrap; 允许长的,不能折行的单词换到下一行
  writing-mode; 规定文本行是水平还是垂直布局

  背景样式
  background;
  background-attachment; 设置背景图像是与页面的其余部分一起滚动还是固定的
  background-blend-mode; 规定每个背景图层(颜色/图像)的混合模式
  background-clip; 定义背景(颜色或图像)应在元素内延伸的距离
  background-color; 规定元素的背景色
  background-image; 规定元素的一幅或多幅背景图像
  background-origin; 规定背景图像的初始位置
  background-position; 规定背景图像的位置
  background-repeat; 设置是否以及如何重复背景图像
  background-size; 规定背景图像的尺寸

  块级元素样式
  border; border-width,border-style 以及 border-color 的简写属性
  border-bottom; border-bottom-width,border-bottom-style 以及 border-bottom-color 的简写属性
  border-bottom-color; 设置下边框的颜色
  border-bottom-left-radius; 定义左下角的边框圆角
  border-bottom-right-radius; 定义右下角的边框圆角
  border-bottom-style; 设置下边框的样式
  border-bottom-width; 设置下边框的宽度
  border-collapse; 设置表格边框是折叠为单一边框还是分开的
  border-color; 设置四条边框的颜色
  border-image; border-image-* 属性的简写属性
  border-image-outset; 规定边框图像区域超出边框的量
  border-image-repeat; 规定边框图像应重复,圆角,还是拉伸
  border-image-slice; 规定如何裁切边框图像
  border-image-source; 规定用作边框的图像的路径
  border-image-width; 规定边框图像的宽度
  border-left; 所有 border-left-* 属性的简写属性
  border-left-color; 设置左边框的颜色
  border-left-style; 设置左边框的样式
  border-left-width; 设置左边框的宽度
  border-radius; 四个 border-*-radius 属性的简写属性
  border-right; 所有 border-right-* 属性的简写属性
  border-right-color; 设置右边框的颜色
  border-right-style; 设置右边框的样式
  border-right-width; 设置右边框的宽度
  border-spacing; 设置相邻单元格边框之间的距离
  border-style; 设置四条边框的样式
  border-top; border-top-width,border-top-style 以及 border-top-color 的简写属性
  border-top-color; 设置上边框的颜色
  border-top-left-radius; 定义左上角的边框圆角
  border-top-right-radius; 定义右上角的边框圆角
  border-top-style; 设置上边框的样式
  border-top-width; 设置上边框的宽度
  border-width; 设置四条边框的宽度
  bottom; 设置元素相对于其父元素底部的位置
  box-decoration-break; 设置元素在分页符处的背景和边框的行为,或对于行内元素在换行符处的行为
  box-shadow; 将一个或多个阴影附加到元素
  box-sizing; 定义元素的宽度和高度的计算方式：它们是否应包含内边距和边框
  width; 设置元素的宽度
  height; 设置元素的高度
  left; 规定定位元素的左侧位置
  margin; 在一条声明中设置所有外边距属性
  margin-bottom; 设置元素的下外边距
  margin-left; 设置元素的左外边距
  margin-right; 设置元素的右外边距
  margin-top; 设置元素的上外边距
  max-height; 设置元素的最大高度
  max-width; 设置元素的最大宽度
  min-height; 设置元素的最小高度
  min-width; 设置元素的最小宽度
  mix-blend-mode; 规定元素内容应如何与其直接父的背景相混合
  opacity; 设置元素的不透明等级
  overflow; 规定如果内容溢出元素框会发生什么情况
  overflow-wrap; 规定浏览器是否可能为了防止溢出而在单词内折行(当字符串太长而无法适应其包含框时)
  overflow-x; 规定是否剪裁内容的左右边缘,如果它溢出了元素的内容区域
  overflow-y; 规定是否剪裁内容的上下边缘,如果它溢出了元素的内容区域
  padding; 所有 padding-* 属性的简写属性
  padding-bottom; 设置元素的下内边距
  padding-left; 设置元素的左内边距
  padding-right; 设置元素的右内边距
  padding-top; 设置元素的上内边距
  vertical-align; 设置元素的垂直对齐方式
  visibility; 规定元素是否可见

  弹性样式
  display; 规定如何显示某个 HTML 元素
  flex; flex-grow,flex-shrink 以及 flex-basis 的简写属性
  flex-basis; 规定弹性项目的初始长度
  flex-direction; 规定弹性项目的方向
  flex-flow; flex-direction 和 flex-wrap 的简写属性
  flex-grow; 规定项目相对于其余项目的增量
  flex-shrink; 规定项目相对于其余项目的减量
  flex-wrap; 规定弹性项目是否应该换行
  align-content;规定弹性容器内的行之间的对齐方式,当项目不使用所有可用空间时
  align-items;
  align-self;
  justify-content; 规定项目在弹性容器内的对齐方式,当项目未用到所有可用空间时
  order; 设置弹性项目相对于其余项目的顺序

  列表样式
  list-style; 在一条声明中设置所有列表属性
  list-style-image; 把图像指定为列表项标记
  list-style-position; 规定列表项标记的位置
  list-style-type; 规定列表项标记的类型

  表单样式
  caret-color; 规定光标在 input,textarea 或任何可编辑元素中的颜色
  resize; 定义用户是否以及如何调整元素的尺寸

  表格样式
  caption-side; 规定表格标题的放置方式
  empty-cells; 规定是否在表格中的空白单元格上显示边框和背景
  table-layout; 定义用于对单元格,行和列进行布局的算法

  浮动样式
  float; 规定是否应该对盒(box)进行浮动
  clear; 规定不允许在元素的哪一侧浮动元素

  定位样式
  position; 规定用于元素的定位方法的类型(静态,相对,绝对或固定)
  right; 规定定位元素的左侧位置
  top; 规定定位元素的顶端位置
  z-index; 设置定位元素的堆叠顺序

  动画样式
  @keyframes; 规定动画代码
  animation;
  animation-delay;
  animation-direction;
  animation-duration;
  animation-fill-mode;
  animation-iteration-count;
  animation-name;
  animation-play-state;
  animation-timing-function;
  transition; 所有 transition-* 属性的简写属性
  transition-delay; 规定合适开始过渡效果
  transition-duration; 规定完成过渡效果所需的秒或毫秒数
  transition-property; 规定过渡效果对应的 CSS 属性的名称
  transition-timing-function; 规定过渡效果的速度曲线

  3D样式
  perspective; 为 3D 定位元素提供透视
  perspective-origin; 定义用户观看 3D 定位元素的位置
  transform; 向元素应用 2D 或 3D 转换
  transform-origin; 允许您更改转换元素的位置
  transform-style; 规定如何在 3D 空间中渲染嵌套的元素

  网格样式
  grid; grid-template-rows,grid-template-columns,grid-template-areas,grid-auto-rows,grid-auto-columns 以及
  grid-auto-flow属性的简写属性
  grid-area; 即可规定网格项的名称,也可以是 grid-row-start,grid-column-start,grid-row-end 以及 grid-column-end 属性的简写属性
  grid-auto-columns; 规定默认的列尺寸
  grid-auto-flow; 规定如何在网格中插入自动放置的项目
  grid-auto-rows; 规定默认的行尺寸
  grid-column; grid-column-start 和 grid-column-end 属性的简写属性
  grid-column-end; 规定如何结束网格项目
  grid-column-gap; 规定列间隙的尺寸
  grid-column-start; 规定网格项目从何处开始
  grid-gap; grid-row-gap 和 grid-column-gap 的简写属性
  grid-row; grid-row-start 和 grid-row-end 属性的简写属性
  grid-row-end; 规定网格项目在何处结束
  grid-row-gap; 规定列间隙的尺寸
  grid-row-start; 规定网格项目从何处开始
  grid-template; grid-template-rows,grid-template-columns 以及 grid-areas 属性的简写属性
  grid-template-areas; 规定如何使用命名的网格项显示列和行
  grid-template-columns; 指定列的尺寸以及网格布局中的列数
  grid-template-rows; 指定网格布局中的行的尺寸

  其他样式
  all;
  backface-visibility;
  break-after; 规定指定元素之后是否应出现 page-,column- 或 region-break
  break-before; 规定指定元素之前是否应出现 page-,column- 或 region-break
  break-inside; 规定指定元素内部是否应出现 page-,column- 或 region-break
  @charset; 规定样式表中使用的字符编码
  clip; 剪裁绝对定位的元素
  clip-path; 将元素裁剪为基本形状或 SVG 源
  column-count; 规定元素应分为的列数
  column-fill; 指定如何填充列(是否 balanced)
  column-gap; 规定列间隙
  column-rule; 所有 column-rule-* 属性的简写属性
  column-rule-color; 规定列之间规则的颜色
  column-rule-style; 规定列之间的规则样式
  column-rule-width; 规定列之间的规则宽度
  column-span; 规定元素应该跨越多少列
  column-width; 规定列宽度
  columns; column-width 和 column-count 的简写属性
  content; 与 :before 和 :after 伪元素一起使用,来插入生成的内容
  counter-increment; 增加或减少一个或多个 CSS 计数器的值
  counter-reset; 创建或重置一个或多个 CSS 计数器
  cursor; 规定当指向元素时要显示的鼠标光标
  filter; 定义元素显示之前的效果(例如,模糊或颜色偏移)
  hanging-punctuation, 规定是否可以在行框外放置标点符号
  hyphens; 设置如何分割单词以改善段落的布局
  image-rendering; 当图像被缩放时,向浏览器提供关于保留图像的哪些最重要的方面的信息
  @import; 允许您将样式表导入另一张样式表
  isolation; 定义元素是否必须创建新的堆叠内容
  mask; 通过在特定位置遮罩或剪切图像来隐藏元素
  mask-type; 规定将遮罩元素用作亮度或 Alpha 遮罩
  object-fit; 规定替换元素的内容应如何适合其所用高度和宽度建立的框
  object-position; 指定替换元素在其框内的对齐方式
  orphans; 设置在元素内发生分页时必须保留在页面底部的最小行数
  outline; outline-width,outline-style 以及 outline-color 属性的简写属性
  outline-color; 设置轮廓的颜色
  outline-offset; 对轮廓进行偏移,并将其绘制到边框边缘之外
  outline-style; 设置轮廓的样式
  outline-width; 设置轮廓的宽度
  page-break-after; 设置元素之后的分页(page-break)行为
  page-break-before; 设置元素之前的分页(page-break)行为
  page-break-inside; 设置元素内的分页(page-break)行为
  pointer-events; 定义元素是否对指针事件做出反应
  quotes; 设置引号类型
  scroll-behavior; 规定可滚动框中是否平滑地滚动,而不是直接跳跃
  tab-size; 规定制表符的宽度
  widows; 设置如果元素内发生分页,必须在页面顶部保留的最小行数`
  },


  'js': {
    0:
      `属性
  closed	返回窗口是否已被关闭
  defaultStatus	设置或返回窗口状态栏中的默认文本
  document	对Document对象的只读引用(请参阅对象)
  frames	返回窗口中所有命名的框架该集合是Window对象的数组,每个Window对象在窗口中含有一个框架
  history	对History对象的只读引用请参数History对象
  innerHeight	返回窗口的文档显示区的高度
  innerWidth	返回窗口的文档显示区的宽度
  localStorage	在浏览器中存储key/value对,没有过期时间
  length	设置或返回窗口中的框架数量
  location	用于窗口或框架的Location对象请参阅Location对象
  name	设置或返回窗口的名称
  navigator	对Navigator对象的只读引用请参数Navigator对象
  opener	返回对创建此窗口的窗口的引用
  outerHeight	返回窗口的外部高度,包含工具条与滚动条
  outerWidth	返回窗口的外部宽度,包含工具条与滚动条
  pageXOffset	设置或返回当前页面相对于窗口显示区左上角的X位置
  pageYOffset	设置或返回当前页面相对于窗口显示区左上角的Y位置
  parent	返回父窗口
  screen	对Screen对象的只读引用请参数Screen对象
  screenLeft	返回相对于屏幕窗口的x坐标
  screenTop	返回相对于屏幕窗口的y坐标
  screenX	返回相对于屏幕窗口的x坐标
  sessionStorage	在浏览器中存储key/value对,在关闭窗口或标签页之后将会删除这些数据
  screenY	返回相对于屏幕窗口的y坐标
  self	返回对当前窗口的引用等价于Window属性
  status	设置窗口状态栏的文本
  top	返回最顶层的父窗口

  方法
  addEventListener()  添加句柄
  alert()	显示带有一段消息和一个确认按钮的警告框
  atob()	解码一个base-64编码的字符串
  btoa()	创建一个base-64编码的字符串
  blur()	把键盘焦点从顶层窗口移开
  clearInterval()	取消由setInterval()设置的timeout
  clearTimeout()	取消由setTimeout()方法设置的timeout
  close()	关闭浏览器窗口
  confirm()	显示带有一段消息以及确认按钮和取消按钮的对话框
  createPopup()	创建一个pop-up窗口
  focus()	把键盘焦点给予一个窗口
  getSelection()	返回一个Selection对象,表示用户选择的文本范围或光标的当前位置
  getComputedStyle()	获取指定元素的CSS样式
  matchMedia()	该方法用来检查media,query语句,它返回一个MediaQueryList对象
  moveBy()	可相对窗口的当前坐标把它移动指定的像素
  moveTo()	把窗口的左上角移动到一个指定的坐标
  open()	打开一个新的浏览器窗口或查找一个已命名的窗口
  print()	打印当前窗口的内容
  prompt()	显示可提示用户输入的对话框
  resizeBy()	按照指定的像素调整窗口的大小
  resizeTo()	把窗口的大小调整到指定的宽度和高度
  scroll()	已废弃 该方法已经使用了scrollTo()方法来替代
  scrollBy()	按照指定的像素值来滚动内容
  scrollTo()	把内容滚动到指定的坐标
  setInterval()	按照指定的周期(以毫秒计)来调用函数或计算表达式
  setTimeout()	在指定的毫秒数后调用函数或计算表达式
  stop()	停止页面载入
  postMessage()	安全地实现跨源通信`,


    1:
      `属性
  document.activeElement	返回当前获取焦点元素
  document.anchors	返回对文档中所有Anchor对象的引用
  document.applets  返回对文档中所有Applet对象的引用注意:HTML5已不支持<applet>元素
  document.baseURI	返回文档的绝对基础URI
  document.body	返回文档的body元素
  document.cookie	设置或返回与当前文档有关的所有cookie
  document.doctype	返回与文档相关的文档类型声明(DTD)
  document.documentElement	返回文档的根节点
  document.documentMode	返回用于通过浏览器渲染文档的模式
  document.documentURI	设置或返回文档的位置
  document.domain	返回当前文档的域名
  document.domConfig	已废弃返回normalizeDocument()被调用时所使用的配置
  document.embeds	返回文档中所有嵌入的内容(embed)集合
  document.forms	返回对文档中所有Form对象引用
  document.images	返回对文档中所有Image对象引用
  document.implementation	返回处理该文档的DOMImplementation对象
  document.inputEncoding	返回用于文档的编码方式(在解析时)
  document.lastModified	返回文档被最后修改的日期和时间
  document.links	返回对文档中所有Area和Link对象引用
  document.readyState	返回文档状态(载入中……)
  document.referrer	返回载入当前文档的文档的URL
  document.scripts	返回页面中所有脚本的集合
  document.strictErrorChecking	设置或返回是否强制进行错误检查
  document.title	返回当前文档的标题
  document.URL	返回文档完整的URL

  方法
  document.addEventListener()	向文档添加句柄
  document.adoptNode(node)	从另外一个文档返回adapded节点到当前文档
  document.close()	关闭用document.open()方法打开的输出流,并显示选定的数据
  document.createAttribute()	创建一个属性节点
  document.createComment()	createComment()方法可创建注释节点
  document.createDocumentFragment()	创建空的DocumentFragment对象,并返回此对象
  document.createElement()	创建元素节点
  document.createTextNode()	创建文本节点
  document.getElementsByClassName()	返回文档中所有指定类名的元素集合,作为NodeList对象
  document.getElementById()	返回对拥有指定id的第一个对象的引用
  document.getElementsByName()	返回带有指定名称的对象集合
  document.getElementsByTagName()	返回带有指定标签名的对象集合
  document.importNode()	把一个节点从另一个文档复制到该文档以便应用
  document.normalize()	删除空文本节点,并连接相邻节点
  document.normalizeDocument()	删除空文本节点,并连接相邻节点的
  document.open()	打开一个流,以收集来自任何document.write()或document.writeln()方法的输出
  document.querySelector()	返回文档中匹配指定的CSS选择器的第一元素
  document.querySelectorAll()	document.querySelectorAll()是HTML5中引入的新方法,返回文档中匹配的CSS选择器的所有元素节点列表
  document.removeEventListener()	移除文档中的事件句柄(由addEventListener()方法添加)
  document.renameNode()	重命名元素或者属性节点
  document.write()	向文档写HTML表达式或JavaScript代码
  document.writeln()	等同于write()方法,不同的是在每个表达式之后写一个换行符`,


    2:
      `属性
  element.accessKey	设置或返回accesskey一个元素
  element.attributes	返回一个元素的属性数组
  element.childNodes	返回元素的一个子节点的数组
  element.children	返回元素的子元素的集合
  element.classList	返回元素的类名,作为DOMTokenList对象
  element.className	设置或返回元素的class属性
  element.clientTop	表示一个元素的顶部边框的宽度,以像素表示
  element.clientLeft	表示一个元素的左边框的宽度,以像素表示
  element.clientHeight	在页面上返回内容的可视高度(高度包含内边距(padding),不包含边框(border),外边距(margin)和滚动条)
  element.clientWidth	在页面上返回内容的可视宽度(宽度包含内边距(padding),不包含边框(border),外边距(margin)和滚动条)
  element.contentEditable	设置或返回元素的内容是否可编辑
  element.dir	设置或返回一个元素中的文本方向
  element.firstChild	返回元素的第一个子节点
  element.id	设置或者返回元素的id
  element.innerHTML	设置或者返回元素的内容
  element.innerText	设置或者返回元素的内容
  element.isContentEditable	如果元素内容可编辑返回true,否则返回false
  element.lang	设置或者返回一个元素的语言
  element.lastChild	返回的最后一个子节点
  element.namespaceURI	返回命名空间的URI
  element.nextSibling	返回该元素紧跟的一个节点
  element.nextElementSibling	返回指定元素之后的下一个兄弟元素(相同节点树层中的下一个元素节点)
  element.nodeName	返回元素的标记名(大写)
  element.nodeType	返回元素的节点类型
  element.nodeValue	返回元素的节点值
  element.offsetHeight	返回任何一个元素的高度包括边框(border)和内边距(padding),但不包含外边距(margin)
  element.offsetWidth	返回元素的宽度,包括边框(border)和内边距(padding),但不包含外边距(margin)
  element.offsetLeft	返回当前元素的相对水平偏移位置的偏移容器
  element.offsetParent	返回元素的偏移容器
  element.offsetTop	返回当前元素的相对垂直偏移位置的偏移容器
  element.ownerDocument	返回元素的根元素(文档对象)
  element.parentNode	返回元素的父节点
  element.previousSibling	返回某个元素紧接之前元素
  element.previousElementSibling	返回指定元素的前一个兄弟元素(相同节点树层中的前一个元素节点)
  element.scrollHeight	返回整个元素的高度(包括带滚动条的隐蔽的地方)
  element.scrollLeft	返回当前视图中的实际元素的左边缘和左边缘之间的距离
  element.scrollTop	返回当前视图中的实际元素的顶部边缘和顶部边缘之间的距离
  element.scrollWidth	返回元素的整个宽度(包括带滚动条的隐蔽的地方)
  element.style	设置或返回元素的样式属性
  element.tabIndex	设置或返回元素的标签顺序
  element.tagName	作为一个字符串返回某个元素的标记名(大写)
  element.textContent	设置或返回一个节点和它的文本内容
  element.title	设置或返回元素的title属性
  nodelist.length	返回节点列表的节点数目

  方法
  element.addEventListener()	向指定元素添加事件句柄
  element.appendChild()	为元素添加一个新的子元素
  element.cloneNode()	克隆某个元素
  element.compareDocumentPosition() 比较两个元素的文档位置
  element.focus()	设置文档或元素获取焦点
  element.getAttribute()	返回指定元素的属性值
  element.getAttributeNode()	返回指定属性节点
  element.getElementsByTagName()	返回指定标签名的所有子元素集合
  element.getElementsByClassName()	返回文档中所有指定类名的元素集合,作为NodeList对象
  element.getFeature()	返回指定特征的执行APIs对象
  element.getUserData()	返回一个元素中关联键值的对象
  element.hasAttribute()	如果元素中存在指定的属性返回true,否则返回false
  element.hasAttributes()	如果元素有任何属性返回true,否则返回false
  element.hasChildNodes()	返回一个元素是否具有任何子元素
  element.hasFocus()	返回布尔值,检测文档或元素是否获取焦点
  element.insertBefore()	现有的子元素之前插入一个新的子元素
  element.isDefaultNamespace()	如果指定了namespaceURI返回true,否则返回false
  element.isEqualNode()	检查两个元素是否相等
  element.isSameNode()	检查两个元素所有有相同节点
  element.isSupported()	如果在元素中支持指定特征返回true
  element.normalize()	使得此成为一个"normal"的形式,其中只有结构(如元素,注释,处理指令,CDATA节和实体引用)隔开Text节点,即元素(包括属性)下面的所有文本节点,既没有相邻的文本节点也没有空的文本节点
  element.querySelector()	返回匹配指定CSS选择器元素的第一个子元素
  element.querySelectorAll()	返回匹配指定CSS选择器元素的所有子元素节点列表
  element.removeAttribute()	从元素中删除指定的属性
  element.removeAttributeNode()	删除指定属性节点并返回移除后的节点
  element.removeChild()	删除一个子元素
  element.removeEventListener()	移除由addEventListener()方法添加的事件句柄
  element.replaceChild()	替换一个子元素
  element.setAttribute()	设置或者改变指定属性并指定值
  element.setAttributeNode()	设置或者改变指定属性节点
  element.setIdAttribute()
  element.setIdAttributeNode()
  element.setUserData()	在元素中为指定键值关联对象
  element.toString()	一个元素转换成字符串
  nodelist.item()	返回某个元素基于文档树的索引
  `,


    3:
      `event对象下常用对象
  AnimationEvent	针对CSS动画
  ClipboardEvent	针对剪贴板的修改
  DragEvent	针对拖放交互
  FocusEvent	针对与焦点有关的事件
  HashChangeEvent	针对URL锚点部分的更改
  InputEvent	针对用户输入
  KeyboardEvent	针对键盘交互
  MouseEvent	针对鼠标交互
  PageTransitionEvent	针对导航到网页或离开网页
  PopStateEvent	针对历史记录条目中的更改
  ProgressEvent	针对加载外部资源的进度
  StorageEvent	针对窗口的存储区域中的更改
  TouchEvent	针对触摸交互
  TransitionEvent	针对CSS过渡
  UiEvent	针对用户界面交互
  WheelEvent	针对鼠标滚轮交互

  属性
  altKey	返回触发鼠标事件时是否按下了"ALT"键
  altKey	返回触发按键事件时是否按下了"ALT"键
  animationName	返回动画的名称	
  bubbles	返回特定事件是否为冒泡事件	
  button	返回触发鼠标事件时按下的鼠标按钮	
  buttons	返回触发鼠标事件时按下的鼠标按钮	
  cancelBubble	设置或返回事件是否应该向上层级进行传播
  cancelable	返回事件是否可以阻止其默认操作
  changeTouches	返回在上一触摸与该触摸之间其状态已更改的所有触摸对象的列表	
  charCode	返回触发onkeypress事件的键的Unicode字符代码	
  clientX	返回触发鼠标事件时,鼠标指针相对于当前窗口的水平坐标
  clientY	返回触发鼠标事件时,鼠标指针相对于当前窗口的垂直坐标
  clipboardData	返回对象,其中包含受剪贴板操作影响的数据	
  code	返回触发事件的键的代码	
  composed	指示该事件是否可以从Shadow DOM传递到一般的DOM
  ctrlKey	返回触发鼠标事件时是否按下了"CTRL"键	
  ctrlKey	返回按键鼠标事件时是否按下了"CTRL"键
  currentTarget	返回其事件侦听器触发事件的元素
  data	返回插入的字符
  dataTransfer	返回一个对象,其中包含被拖放或插入/删除的数据
  defaultPrevented	返回是否为事件调用preventDefault()方法
  deltaX	返回鼠标滚轮的水平滚动量(x轴)	
  deltaY	返回鼠标滚轮的垂直滚动量(y轴)	
  deltaZ	返回鼠标滚轮的Z轴滚动量WheelEvent
  deltaMode	返回数字,代表增量值(像素,线或页面)的度量单位	
  detail	返回数字,指示鼠标被单击了多少次	
  elapsedTime	返回动画已运行的秒数	
  elapsedTime	返回过渡已运行的秒数
  eventPhase	返回当前正在评估事件流处于哪个阶段	
  inputType	返回更改的类型(即"inserting"或"deleting")	
  isComposing	返回事件的状态是否正在构成
  isTrusted	返回事件是否受信任	
  key	返回事件表示的键的键值	
  key	返回更改后的存储项的键	
  keyCode	返回触发onkeypress,onkeydown或onkeyup事件的键的Unicode字符代码	
  location	返回键盘或设备上按键的位置
  lengthComputable	返回进度的长度是否可计算	
  loaded	返回已加载的工作量	
  metaKey	返回事件触发时是否按下了"META"键
  metaKey	返回按键事件触发时是否按下了"META"键
  MovementX	返回相对于上一mousemove事件的位置的鼠标指针的水平坐标	
  MovementY	返回相对于上一mousemove事件的位置的鼠标指针的垂直坐标	
  newURL	返回更改hash后的文档URL	
  newValue	返回更改后的存储项目的新值	
  offsetX	返回鼠标指针相对于目标元素边缘位置的水平坐标	
  offsetY	返回鼠标指针相对于目标元素边缘位置的垂直坐标	
  oldURL	返回更改hash前的文档URL	
  oldValue	返回更改后的存储项目的旧值	
  onemptied	当发生不良情况且媒体文件突然不可用时,发生此事件
  pageX	返回触发鼠标事件时鼠标指针相对于文档的水平坐标	
  pageY	返回触发鼠标事件时鼠标指针相对于文档的垂直坐标	
  persisted	返回网页是否被浏览器缓存	
  propertyName	返回与动画或过渡相关联的CSS属性的名称
  pseudoElement	返回动画或过渡的伪元素的名称
  region		
  relatedTarget	返回与触发鼠标事件的元素相关的元素	
  relatedTarget	返回与触发事件的元素相关的元素	
  repeat	返回是否重复按住某个键	
  screenX	返回窗口/鼠标指针相对于屏幕的水平坐标	
  screenY	返回窗口/鼠标指针相对于屏幕的垂直坐标	
  shiftKey	返回事件触发时是否按下了"SHIFT"键	
  shiftKey	返回按键事件触发时是否按下了"SHIFT"键
  state	返回包含历史记录条目副本的对象	
  storageArea	返回代表受影响的存储对象的对象	
  target	返回触发事件的元素	
  targetTouches	返回包含仍与触摸面接触的所有触摸点的Touch对象的TouchList列表	
  timeStamp	返回创建事件的时间(相对于纪元的毫秒数)	
  total	返回将要加载的工作总量
  touches	返回当前与表面接触的所有touch对象的列表	
  type	返回事件名称	
  url	返回已更改项目的所在文档的URL	
  which	返回触发鼠标事件时按下的鼠标按钮	
  which	返回触发onkeypress事件的键的Unicode字符码,或触发onkeydown或onkeyup事件的键的Unicode键码	
  view	返回对发生事件的Window对象的引用

  方法
  composedPath()	返回事件的路径
  createEvent()	创建新事件	
  getModifierState()	返回包含目标范围的数组,此范围将受到插入/删除的影响	
  getTargetRanges()	返回包含目标范围的数组,此范围将受到插入/删除的影响	
  preventDefault()	如果可以取消事件,则将其取消,不执行属于该事件的默认操作	
  stopImme...()	防止同一事件的其他侦听器被调用	
  stopPropagation()	防止事件在事件流中进一步传播	
  `,


    4: `属性
  constructor	返回创建数组对象的原型函数
  length	设置或返回数组元素的个数
  prototype	允许你向数组对象添加属性或方法

  array方法
  concat()	连接两个或更多的数组,并返回结果
  copyWithin()	从数组的指定位置拷贝元素到数组的另一个指定位置中
  entries()	返回数组的可迭代对象
  every()	检测数值元素的每个元素是否都符合条件
  fill()	使用一个固定值来填充数组
  filter()	检测数值元素,并返回符合条件所有元素的数组
  find()	返回符合传入测试(函数)条件的数组元素
  findIndex()	返回符合传入测试(函数)条件的数组元素索引
  forEach()	数组每个元素都执行一次回调函数
  from()	通过给定的对象中创建一个数组
  includes()	判断一个数组是否包含一个指定的值
  indexOf()	搜索数组中的元素,并返回它所在的位置
  isArray()	判断对象是否为数组
  join()	把数组的所有元素放入一个字符串
  keys()	返回数组的可迭代对象,包含原始数组的键(key)
  lastIndexOf()	搜索数组中的元素,并返回它最后出现的位置
  map()	通过指定函数处理数组的每个元素,并返回处理后的数组
  pop()	删除数组的最后一个元素并返回删除的元素
  push()	向数组的末尾添加一个或更多元素,并返回新的长度
  reduce()	将数组元素计算为一个值(从左到右)
  reduceRight()	将数组元素计算为一个值(从右到左)
  reverse()	反转数组的元素顺序
  shift()	删除并返回数组的第一个元素
  slice()	选取数组的一部分,并返回一个新数组
  some()	检测数组元素中是否有元素符合指定条件
  sort()	对数组的元素进行排序
  splice()	从数组中添加或删除元素
  toString()	把数组转换为字符串,并返回结果
  unshift()	向数组的开头添加一个或更多元素,并返回新的长度
  valueOf()	返回数组对象的原始值`,


    5: `属性
  E	返回算术常量e,即自然对数的底数(约等于2.718)
  LN2	返回2的自然对数(约等于0.693)
  LN10	返回10的自然对数(约等于2.302)
  LOG2E	返回以2为底的e的对数(约等于1.4426950408889634)
  LOG10E	返回以10为底的e的对数(约等于0.434)
  PI	返回圆周率(约等于3.14159)
  SQRT1_2	返回2的平方根的倒数(约等于0.707)
  SQRT2	返回2的平方根(约等于1.414)
  
  math方法
  abs(x)	返回x的绝对值
  acos(x)	返回x的反余弦值
  asin(x)	返回x的反正弦值
  atan(x)	以介于-PI/2与PI/2弧度之间的数值来返回x的反正切值
  atan2(y,x)	返回从x轴到点(x,y)的角度(介于-PI/2与PI/2弧度之间)
  ceil(x)	对数进行上舍入
  cos(x)	返回数的余弦
  exp(x)	返回Ex的指数
  floor(x)	对x进行下舍入
  log(x)	返回数的自然对数(底为e)
  max(x,y,z,...,n)	返回x,y,z,...,n中的最高值
  min(x,y,z,...,n)	返回x,y,z,...,n中的最低值
  pow(x,y)	返回x的y次幂
  random()	返回0~1之间的随机数
  round(x)	四舍五入
  sin(x)	返回数的正弦
  sqrt(x)	返回数的平方根
  tan(x)	返回角的正切`,


    6: `属性
  constructor	返回对创建此对象的Date函数的引用
  prototype	使您有能力向对象添加属性和方法

  date方法
  getDate()	从Date对象返回一个月中的某一天(1~31)
  getDay()	从Date对象返回一周中的某一天(0~6)
  getFullYear()	从Date对象以四位数字返回年份
  getHours()	返回Date对象的小时(0~23)
  getMilliseconds()	返回Date对象的毫秒(0~999)
  getMinutes()	返回Date对象的分钟(0~59)
  getMonth()	从Date对象返回月份(0~11)
  getSeconds()	返回Date对象的秒数(0~59)
  getTime()	返回1970年1月1日至今的毫秒数
  getTimezoneOffset()	返回本地时间与格林威治标准时间(GMT)的分钟差
  getUTCDate()	根据世界时从Date对象返回月中的一天(1~31)
  getUTCDay()	根据世界时从Date对象返回周中的一天(0~6)
  getUTCFullYear()	根据世界时从Date对象返回四位数的年份
  getUTCHours()	根据世界时返回Date对象的小时(0~23)
  getUTCMilliseconds()	根据世界时返回Date对象的毫秒(0~999)
  getUTCMinutes()	根据世界时返回Date对象的分钟(0~59)
  getUTCMonth()	根据世界时从Date对象返回月份(0~11)
  getUTCSeconds()	根据世界时返回Date对象的秒钟(0~59)
  getYear()	已废弃,请使用getFullYear()方法代替
  parse()	返回1970年1月1日午夜到指定日期(字符串)的毫秒数
  setDate()	设置Date对象中月的某一天(1~31)
  setFullYear()	设置Date对象中的年份(四位数字)
  setHours()	设置Date对象中的小时(0~23)
  setMilliseconds()	设置Date对象中的毫秒(0~999)
  setMinutes()	设置Date对象中的分钟(0~59)
  setMonth()	设置Date对象中月份(0~11)
  setSeconds()	设置Date对象中的秒钟(0~59)
  setTime()	setTime() 方法以毫秒设置Date对象
  setUTCDate()	根据世界时设置Date对象中月份的一天(1~31)
  setUTCFullYear()	根据世界时设置Date对象中的年份(四位数字)
  setUTCHours()	根据世界时设置Date对象中的小时(0~23)
  setUTCMilliseconds()	根据世界时设置Date对象中的毫秒(0~999)
  setUTCMinutes()	根据世界时设置Date对象中的分钟(0~59)
  setUTCMonth()	根据世界时设置Date对象中的月份(0~11)
  setUTCSeconds()	setUTCSeconds()方法用于根据世界时(UTC)设置指定时间的秒字段
  setYear()	已废弃请使用setFullYear()方法代替
  toDateString()	把Date对象的日期部分转换为字符串
  toGMTString()	已废弃请使用toUTCString()方法代替
  toISOString()	使用ISO标准返回字符串的日期格式
  toJSON()	以JSON数据格式返回日期字符串
  toLocaleDateString()	根据本地时间格式,把Date对象的日期部分转换为字符串
  toLocaleTimeString()	根据本地时间格式,把Date对象的时间部分转换为字符串
  toLocaleString()	根据本地时间格式,把Date对象转换为字符串
  toString()	把Date对象转换为字符串
  toTimeString()	把Date对象的时间部分转换为字符串
  toUTCString()  根据世界时,把Date对象转换为字符串
  实例：var today=new Date();var UTCstring=today.toUTCString();
  UTC()	根据世界时返回1970年1月1日到指定日期的毫秒数
  valueOf()	返回Date对象的原始值`,


    7: `属性
  constructor	对创建该对象的函数的引用
  length	字符串的长度
  prototype	允许您向对象添加属性和方法
  
  string方法
  charAt()	返回在指定位置的字符
  charCodeAt()	返回在指定的位置的字符的Unicode编码
  concat()	连接两个或更多字符串,并返回新的字符串
  endsWith()	判断当前字符串是否是以指定的子字符串结尾的(区分大小写)
  fromCharCode()	将Unicode编码转为字符
  indexOf()	返回某个指定的字符串值在字符串中首次出现的位置
  includes()	查找字符串中是否包含指定的子字符串
  lastIndexOf()	从后向前搜索字符串,并从起始位置(0)开始计算返回字符串最后出现的位置
  match()	查找找到一个或多个正则表达式的匹配
  repeat()	复制字符串指定次数,并将它们连接在一起返回
  replace()	在字符串中查找匹配的子串,并替换与正则表达式匹配的子串
  replaceAll()	在字符串中查找匹配的子串,并替换与正则表达式匹配的所有子串
  search()	查找与正则表达式相匹配的值
  slice()	提取字符串的片断,并在新的字符串中返回被提取的部分
  split()	把字符串分割为字符串数组
  startsWith()	查看字符串是否以指定的子字符串开头
  substr()	从起始索引号提取字符串中指定数目的字符
  substring()	提取字符串中两个指定的索引号之间的字符
  toLowerCase()	把字符串转换为小写
  toUpperCase()	把字符串转换为大写
  trim()	去除字符串两边的空白
  toLocaleLowerCase()	根据本地主机的语言环境把字符串转换为小写
  toLocaleUpperCase()	根据本地主机的语言环境把字符串转换为大写
  valueOf()	返回某个字符串对象的原始值
  toString()	返回一个字符串`,


    8:
      `*****Boolean
  constructor	返回对创建此对象的Boolean函数的引用
  prototype	使您有能力向对象添加属性和方法
  toString()	把布尔值转换为字符串,并返回结果
  valueOf()	返回Boolean对象的原始值

  *****Number
  constructor	返回对创建此对象的Number函数的引用
  MAX_VALUE	可表示的最大的数
  MIN_VALUE	可表示的最小的数
  NEGATIVE_INFINITY	负无穷大,溢出时返回该值
  NaN	非数字值
  POSITIVE_INFINITY	正无穷大,溢出时返回该值
  prototype	允许您可以向对象添加属性和方法
  EPSILON: 表示 1 和比最接近1且大于1的最小Number之间的差别
  MIN_SAFE_INTEGER: 表示在JavaScript中最小的安全的integer型数字(-(253-1))
  MAX_SAFE_INTEGER: 表示在JavaScript中最大的安全整数(253-1)
  isFinite()	检测指定参数是否为无穷大
  toExponential(x)	把对象的值转换为指数计数法
  toFixed(x)	把数字转换为字符串,结果的小数点后有指定位数的数字
  toPrecision(x)	把数字格式化为指定的长度
  toString()	把数字转换为字符串,使用指定的基数
  valueOf()	返回一个 Number 对象的基本数字值
  Number.isInteger(): 用来判断给定的参数是否为整数
  Number.isSafeInteger(): 判断传入的参数值是否是一个"安全整数"包含-(253-1)和253-1

  *****Javascript
  Infinity	代表正的无穷大的数值
  NaN	指示某个值是不是数字值
  undefined	指示未定义的值
  decodeURI()	解码某个编码的URI
  decodeURIComponent()	解码一个编码的URI组件
  encodeURI()	把字符串编码为URI
  encodeURIComponent()	把字符串编码为URI组件
  escape()	对字符串进行编码
  eval()	计算JavaScript字符串,并把它作为脚本代码来执行
  isFinite()	检查某个值是否为有穷大的数
  isNaN()	检查某个值是否是数字
  Number()	把对象的值转换为数字
  parseFloat()	解析一个字符串并返回一个浮点数
  parseInt()	解析一个字符串并返回一个整数
  String()	把对象的值转换为字符串
  unescape()	对由escape()编码的字符串进行解码
  
  *****Navigator
  appCodeName	返回浏览器的代码名
  appName	返回浏览器的名称
  appVersion	返回浏览器的平台和版本信息
  cookieEnabled	返回指明浏览器中是否启用cookie的布尔值
  platform	返回运行浏览器的操作系统平台
  userAgent	返回由客户机发送服务器的user-agent头部的值
  javaEnabled()	指定是否在浏览器中启用Java
  taintEnabled()	规定浏览器是否启用数据污点(data tainting)
  
  *****Screen
  availHeight	返回屏幕的高度(不包括Windows任务栏)
  availWidth	返回屏幕的宽度(不包括Windows任务栏)
  colorDepth	返回目标设备或缓冲器上的调色板的比特深度
  height	返回屏幕的总高度
  pixelDepth	返回屏幕的颜色分辨率(每象素的位数)
  width	返回屏幕的总宽度
  
  *****History
  length	返回历史列表中的网址数
  back()	加载history列表中的前一个 URL
  forward()	加载history列表中的下一个 URL
  go()	加载history列表中的某个具体页面
  
  *****Location
  hash	返回一个URL的锚部分
  host	返回一个URL的主机名和端口
  hostname	返回URL的主机名
  href	返回完整的URL
  pathname	返回的URL路径名
  port	返回一个URL服务器使用的端口号
  protocol	返回一个URL协议
  search	返回一个URL的查询部分
  assign()	载入一个新的文档
  reload()	重新载入当前文档
  replace()	用新的文档替换当前文档
  
  *****LocalStorage,SessionStorage
  localStorage 用于长久保存整个网站的数据,保存的数据没有过期时间,直到手动去除
  sessionStorage 用于临时保存同一窗口(或标签页)的数据,在关闭窗口或标签页之后将会删除这些数据
  length	返回存储对象中包含多少条数据
  key(n)	返回存储对象中第n个键的名称
  getItem(keyname)	返回指定键的值
  setItem(keyname,value) 添加键和值,如果对应的值存在,则更新该键对应的值
  removeItem(keyname)	移除键
  clear()	清除存储对象中所有的键
  window.localStorage	在浏览器中存储key/value对,没有过期时间
  window.sessionStorage	在浏览器中存储key/value对,在关闭窗口或标签页之后将会删除这些数据

  *****属性对象
  attr.isId	如果属性是ID类型,则isId属性返回true,否则返回false
  attr.name	返回属性名称
  attr.value	设置或者返回属性值
  attr.specified	如果属性被指定返回true,否则返回false
  nodemap.getNamedItem()	从节点列表中返回的指定属性节点
  nodemap.item()	返回节点列表中处于指定索引号的节点
  nodemap.length	返回节点列表的节点数目
  nodemap.removeNamedItem()	删除指定属性节点
  nodemap.setNamedItem()	设置指定属性节点(通过名称)
  
  *****Console对象
  assert()	如果断言为false,则在信息到控制台输出错误信息
  clear()	清除控制台上的信息
  count()	记录count()调用次数,一般用于计数
  error()	输出错误信息到控制台
  group()	在控制台创建一个信息分组,一个完整的信息分组以console.group()开始,console.groupEnd()结束
  groupCollapsed()	在控制台创建一个信息分组,类似console.group(),但它默认是折叠的
  groupEnd()	设置当前信息分组结束
  info()	控制台输出一条信息
  log()	控制台输出一条信息
  table()	以表格形式显示数据
  time()	计时器,开始计时间,与timeEnd()联合使用,用于算出一个操作所花费的准确时间
  timeEnd()	计时结束
  trace()	显示当前执行的代码在堆栈中的调用路径
  warn()	输出警告信息,信息最前面加一个黄色三角,表示警告
  
  *****CSSStyleDeclaration 对象
  cssText	设置或返回样式声明文本,cssText对应的是HTML元素的style属性
  length	返回样式中包含多少条声明
  parentRule	返回包含当前规则的规则
  getPropertyPriority()	返回指定的CSS属性是否设置了"important!"属性
  getPropertyValue()	返回指定的CSS属性值
  item()	通过索引方式返回CSS声明中的CSS属性名
  removeProperty()	移除CSS声明中的CSS属性
  setProperty()	在CSS声明块中新建或者修改CSS属性
  
  *****HTMLCollection 是HTML元素的集合,getElementsByTagName()方法返回的就是一个HTMLCollection对象
  item()	返回HTMLCollection中指定索引的元素
  length	返回HTMLCollection中元素的数量
  namedItem()	返回HTMLCollection中指定ID或name属性的元素`,

    9:
      `视频/音频
  addTextTrack()	向音频/视频添加新的文本轨道
  canPlayType()	检测浏览器是否能播放指定的音频/视频类型
  load()	重新加载音频/视频元素
  play()	开始播放音频/视频
  pause()	暂停当前播放的音频/视频
  audioTracks	返回表示可用音频轨道的AudioTrackList对象
  autoplay	设置或返回是否在加载完成后随即播放音频/视频
  buffered	返回表示音频/视频已缓冲部分的TimeRanges对象
  controller	返回表示音频/视频当前媒体控制器的MediaController对象
  controls	设置或返回音频/视频是否显示控件(比如播放/暂停等)
  crossOrigin	设置或返回音频/视频的CORS设置
  currentSrc	返回当前音频/视频的URL
  currentTime	设置或返回音频/视频中的当前播放位置(以秒计)
  defaultMuted	设置或返回音频/视频默认是否静音
  defaultPlaybackRate	设置或返回音频/视频的默认播放速度
  duration	返回当前音频/视频的长度(以秒计)
  ended	返回音频/视频的播放是否已结束
  error	返回表示音频/视频错误状态的MediaError对象
  loop	设置或返回音频/视频是否应在结束时重新播放
  mediaGroup	设置或返回音频/视频所属的组合(用于连接多个音频/视频元素)
  muted	设置或返回音频/视频是否静音
  networkState	返回音频/视频的当前网络状态
  paused	设置或返回音频/视频是否暂停
  playbackRate	设置或返回音频/视频播放的速度
  played	返回表示音频/视频已播放部分的TimeRanges对象
  preload	设置或返回音频/视频是否应该在页面加载后进行加载
  readyState	返回音频/视频当前的就绪状态
  seekable	返回表示音频/视频可寻址部分的TimeRanges对象
  seeking	返回用户是否正在音频/视频中进行查找
  src	设置或返回音频/视频元素的当前来源
  startDate	返回表示当前时间偏移的Date对象
  textTracks	返回表示可用文本轨道的TextTrackList对象
  videoTracks	返回表示可用视频轨道的VideoTrackList对象
  volume	设置或返回音频/视频的音量


  Geolocation(地理定位)
  navigator.geolocation
  getCurrentPosition(position=>{})  位置
  始终会返回latitude,longitude以及accuracy属性
  coords.latitude	十进制数的纬度
  coords.longitude	十进制数的经度
  coords.accuracy	位置精度
  coords.altitude	海拔,海平面以上以米计
  coords.altitudeAccuracy	位置的海拔精度
  coords.heading	方向,从正北开始以度计
  coords.speed	速度,以米/每秒计
  timestamp	响应的日期/时间
  watchPosition(position=>{})  实时位置
  clearWatch()  停止


  Storage(localStorage和sessionStorage)
  key="sitename"和value="123"
  保存数据：localStorage.setItem(key,value);
  读取数据：localStorage.getItem(key);
  删除单个数据：localStorage.removeItem(key);
  删除所有数据：localStorage.clear();
  得到某个索引的key：localStorage.key(index);
  `,
    10:
      `由Window触发该全局事件(适用于<body>标签):
  onafterprint  5		在打印文档之后运行脚本
  onbeforeprint  5		在文档打印之前运行脚本
  onbeforeonload  5		在文档加载之前运行脚本
  onblur		当窗口失去焦点时运行脚本
  onerror  5		当错误发生时运行脚本
  onfocus		当窗口获得焦点时运行脚本
  onhashchange  5		当文档改变时运行脚本
  onload		当文档加载时运行脚本
  onmessage  5		当触发消息时运行脚本
  onoffline  5		当文档离线时运行脚本
  ononline  5		当文档上线时运行脚本
  onpagehide  5		当窗口隐藏时运行脚本
  onpageshow  5		当窗口可见时运行脚本
  onpopstate  5		当窗口历史记录改变时运行脚本
  onredo  5		当文档执行再执行操作(redo)时运行脚本
  onresize  5		当调整窗口大小时运行脚本
  onstorage  5		当Web Storage区域更新时(存储空间中的数据发生变化时)运行脚本
  onundo  5		当文档执行撤销时运行脚本
  onunload  5		当用户离开文档时运行脚本
  
  表单事件(Form Events)
  表单事件在HTML表单中触发(适用于所有HTML元素,但该HTML元素需在form表单内):
  onblur		当元素失去焦点时运行脚本
  onchange		当元素改变时运行脚本
  oncontextmenu  5		当触发上下文菜单时运行脚本
  onfocus		当元素获得焦点时运行脚本
  onformchange  5		当表单改变时运行脚本
  onforminput  5		当表单获得用户输入时运行脚本
  oninput  5		当元素获得用户输入时运行脚本
  oninvalid  5		当元素无效时运行脚本
  onreset		当表单重置时运行脚本,HTML5不支持
  onselect		当选取元素时运行脚本
  onsubmit		当提交表单时运行脚本
  
  键盘事件(Keyboard Events)
  onkeydown		当按下按键时运行脚本
  onkeypress		当按下并松开按键时运行脚本
  onkeyup		当松开按键时运行脚本
  
  鼠标事件(Mouse Events)
  onclick		当单击鼠标时运行脚本
  ondblclick		当双击鼠标时运行脚本
  ondrag  5		当拖动元素时运行脚本
  ondragend  5		当拖动操作结束时运行脚本
  ondragenter  5		当元素被拖动至有效的拖放目标时运行脚本
  ondragleave  5		当元素离开有效拖放目标时运行脚本
  ondragover  5		当元素被拖动至有效拖放目标上方时运行脚本
  ondragstart  5		当拖动操作开始时运行脚本
  ondrop  5		当被拖动元素正在被拖放时运行脚本
  onmousedown		当按下鼠标按钮时运行脚本
  onmousemove		当鼠标指针移动时运行脚本
  onmouseout		当鼠标指针移出元素时运行脚本
  onmouseover		当鼠标指针移至元素之上时运行脚本
  onmouseup		当松开鼠标按钮时运行脚本
  onmousewheel  5		当转动鼠标滚轮时运行脚本
  onscroll  5		当滚动元素的滚动条时运行脚本
  
  多媒体事件(Media Events)
  通过视频(videos),图像(images)或者音频(audio)触发该事件,多应用于HTML媒体元素比如<audio>,<embed>,<img>,<object>,和<video>
  onabort		当发生中止事件时运行脚本
  oncanplay  5		当媒介能够开始播放但可能因缓冲而需要停止时运行脚本
  oncanplaythrough  5		当媒介能够无需因缓冲而停止即可播放至结尾时运行脚本
  ondurationchange  5		当媒介长度改变时运行脚本
  onemptied  5		当媒介资源元素突然为空时(网络错误,加载错误等)运行脚本
  onended  5		当媒介已抵达结尾时运行脚本
  onerror  5		当在元素加载期间发生错误时运行脚本
  onloadeddata  5		当加载媒介数据时运行脚本
  onloadedmetadata  5		当媒介元素的持续时间以及其他媒介数据已加载时运行脚本
  onloadstart  5		当浏览器开始加载媒介数据时运行脚本
  onpause  5		当媒介数据暂停时运行脚本
  onplay  5		当媒介数据将要开始播放时运行脚本
  onplaying  5		当媒介数据已开始播放时运行脚本
  onprogress  5		当浏览器正在取媒介数据时运行脚本
  onratechange  5		当媒介数据的播放速率改变时运行脚本
  onreadystatechange  5		当就绪状态(ready-state)改变时运行脚本
  onseeked  5		当媒介元素的定位属性[1]不再为真且定位已结束时运行脚本
  onseeking  5		当媒介元素的定位属性为真且定位已开始时运行脚本
  onstalled  5		当取回媒介数据过程中(延迟)存在错误时运行脚本
  onsuspend  5		当浏览器已在取媒介数据但在取回整个媒介文件之前停止时运行脚本
  ontimeupdate  5		当媒介改变其播放位置时运行脚本
  onvolumechange  5		当媒介改变音量亦或当音量被设置为静音时运行脚本
  onwaiting  5		当媒介已停止播放但打算继续播放时运行脚本

  其他事件
  ondrogstart
  ondragover
  onshow  5		当<menu>元素在上下文显示时触发
  ontoggle  5		当用户打开或关闭<details>元素时触发`



  },
  'canvas': {
    0:
      `颜色和阴影/属性/方法
  fillStyle	设置或返回用于填充绘画的颜色,渐变或模式
  strokeStyle	设置或返回用于笔触的颜色,渐变或模式
  shadowColor	设置或返回用于阴影的颜色
  shadowBlur	设置或返回用于阴影的模糊级别
  shadowOffsetX	设置或返回阴影与形状的水平距离
  shadowOffsetY	设置或返回阴影与形状的垂直距离
  createLinearGradient()	创建线性渐变(用在画布内容上)
  createPattern()	在指定的方向上重复指定的元素
  createRadialGradient()	创建放射状/环形的渐变(用在画布内容上)
  addColorStop()	规定渐变对象中的颜色和停止位置


  线条样式/属性/方法
  lineCap	设置或返回线条的结束端点样式
  lineJoin	设置或返回两条线相交时,所创建的拐角类型
  lineWidth	设置或返回当前的线条宽度
  miterLimit	设置或返回最大斜接长度


  矩形/属性/方法
  rect()	创建矩形
  fillRect()	绘制"被填充"的矩形
  strokeRect()	绘制矩形(无填充)
  clearRect()	在给定的矩形内清除指定的像素
  

  路径/属性/方法
  fill()	填充当前绘图(路径)
  stroke()	绘制已定义的路径
  beginPath()	起始一条路径,或重置当前路径
  moveTo()	把路径移动到画布中的指定点,不创建线条
  closePath()	创建从当前点回到起始点的路径
  lineTo()	添加一个新点,然后在画布中创建从该点到最后指定点的线条
  clip()	从原始画布剪切任意形状和尺寸的区域
  quadraticCurveTo()	创建二次贝塞尔曲线
  bezierCurveTo()	创建三次贝塞尔曲线
  arc()	创建弧/曲线(用于创建圆形或部分圆)
  arcTo()	创建两切线之间的弧/曲线
  isPointInPath()	如果指定的点位于当前路径中,则返回true,否则返回false


  转换/属性/方法
  scale()	缩放当前绘图至更大或更小
  rotate()	旋转当前绘图
  translate()	重新映射画布上的(0,0)位置
  transform()	替换绘图的当前转换矩阵
  setTransform()	将当前转换重置为单位矩阵然后运行transform()


  文本/属性/方法
  font	设置或返回文本内容的当前字体属性
  textAlign	设置或返回文本内容的当前对齐方式
  textBaseline	设置或返回在绘制文本时使用的当前文本基线
  fillText()	在画布上绘制"被填充的"文本
  strokeText()	在画布上绘制文本(无填充)
  measureText()	返回包含指定文本宽度的对象


  图像绘制/方法
  drawImage()	向画布上绘制图像,画布或视频


  像素操作/属性/方法
  width	返回ImageData对象的宽度
  height	返回ImageData对象的高度
  data	返回一个对象,其包含指定的ImageData对象的图像数据
  createImageData()	创建新的,空白的ImageData对象
  getImageData()	返回ImageData对象,该对象为画布上指定的矩形复制像素数据
  putImageData()	把图像数据(从指定的ImageData对象)放回画布上


  合成/属性/方法
  globalAlpha	设置或返回绘图的当前alpha或透明值
  globalCompositeOperation	设置或返回新图像如何绘制到已有的图像上


  其他/属性/方法
  save()	保存当前环境的状态
  restore()	返回之前保存过的路径状态和属性
  element.getContext()  获取上下文(WebRenderingContext)
  requestanimationframe()  请求帧,只执行一次
  setTimeOut()  延时器,只执行一次
  setInterval()  定时器,无限执行
  createEvent()
  toDataURL()	 `
  },
  'vuejs': {
    0:
      `import {toRefs} from 'vue'
  import {inject} from 'vue'
  import {provide} from 'vue'
  Vue.createApp({
  components:{},

  data() {return {}},
  props:{},

  provide(){return{}}  非父子--父
  inject:{},  非父子--子

                                  attrs属性对象           expose函数
  setup(props,context){   context:{attrs,slots,emit,expose}
    let {info}=toRefs(props);  解构方法
    let everything=...异步(props.attr);
    onMounted(everything);
    watch(everything);
    return{everything}
  }

  beforeCreate(){},  在setup不需要
  created() {},      在setup不需要
  beforeMount(){}
  mounted(){},
  beforeUpdate(){},
  updated(){},
  beforeUnmont(){},
  unmounted(){},
  activated(){},
  deactivated(){},
  methods:{},
  computed:{},
  watch:{},

  directives: {
    focus: {
      自定义指令的定义
      mounted(el) {
        el.focus()
      }
    }
  }

  mixins:[mixins]
  }).mount('#app')
  mixins={}  对象可以包含任意组件选项,混入所有组件

  .stop
  .prevent
  .capture
  .self
  .once
  .passive
  `,
    1:
      `import Vue from 'vue'
  import router from 'vue-router'
  Vue.use(router)
  
  
  import home from '../views/home'
  import category from '../views/category'
  import cart from '../views/cart'
  import me from '../views/me'
  import detail from '../views/detail'
  import landing from '../views/home/children/landing.vue'
  export default new router({
    mode:'history',
    routes:[{
      path:'/',
      name:'',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'',
      component:home
    },
    {
      path:'/category',
      name:'',
      component:category
    },
    {
      path:'/cart',
      name:'',
      component:cart
    },
    {
      path:'/me',
      name:'',
      component:me
    },
    {
      path:'/detail/:id',
      name:'',
      component:detail
    },
    {
      path:'/landing',
      name:'',
      component:landing
    }
  ]
  })
  
  //实例      
  const { createApp, h } = Vue
  
  const NotFoundComponent = { template: '<p>Page not found</p>' }
  const HomeComponent = { template: '<p>Home page</p>' }
  const AboutComponent = { template: '<p>About page</p>' }
  
  const routes = {
    '/': HomeComponent,
    '/about': AboutComponent
  }
  
  const SimpleRouter = {
    data: () => ({
      currentRoute: window.location.pathname
    }),
  
    computed: {
      CurrentComponent() {
        return routes[this.currentRoute] || NotFoundComponent
      }
    },
  
    render() {
      return h(this.CurrentComponent)
    }
  }
  
  createApp(SimpleRouter).mount('#app')`,



    2:
      `import Vue from 'vue'
  import Vuex from 'vuex'
  
  Vue.use(Vuex)
  
  const obj=new Vuex.Store({
    state:{
      cartList:[],
      usersList:[]
    },
    actions:{
      addCart(context,payload){
        const product=context.state.cartList.find(item=>item.id===payload.id)
        if(product){
          product.count++
          console.log(1);
          context.commit('pay1',product)
        }else{
          payload.count=1
          context.state.cartList.push(payload)
          console.log(2);
          context.commit('pay2',payload)
        }
      },
      addUsers(context,payload){
        const users=context.state.usersList.find(item=>{
          item.userName===payload.userName
        })
        if(users){
        }else{
          context.state.usersList.push(payload)
        }
      }
    },
    mutations:{
     pay1(state,payload){
       payload.count++
       console.log(3);
     },
     pay2(state,payload){
       payload.count=1
       payload.checked=true
       state.cartList.push(payload)
     }
    },
    getters:{
  
    },
    modules:{
  
    }
  })
  export default obj`,
    3: "d4",
  },


  'nodejs': {
    0:
      `express简单本地服务器
  // const db = require('mysql');
  const express = require('express');
  const app = express();
  
  // const cors = require('cors');
  // app.use(cors());
  
  app.all('*', function (req, res, next) {
    if (!req.get('Origin')) return next();
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', "PUT,POST,GET,DELETE,OP0TIONS");
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    if ('OPTIONS' == req.method) return res.send(200);
    next();
  });
  
  // let connection = db.createConnection({
  //   host: 'localhost',
  //   user: 'admin',
  //   password: '123456',
  //   database: 'sql'
  // })
  // connection.connect();
  // let sql = 'SELECT * FROM user';
  // connection.query(sql, (err, data) => {
  app.get('/home/swiper', (req, res) => {
    res.json({
      code: 200,
      message: '成功',
      swiperList: [{
        src: 1,
        price: 188
      }, {
        src: 2,
        price: 188
      }, {
        src: 3,
        price: 188
      }],
      swiperList1: [{
        src: 1,
        price: 188
      }, {
        src: 2,
        price: 188
      }, {
        src: 3,
        price: 188
      }]
    });
    // })
  })
  // connection.end();
  app.get('/home/goodsList', (req, res) => {
    console.log(req.query);
    let { type, page } = req.query;
    if (type == 'recommend') {
      switch (page) {
        case '1':
          res.json({
            data: [{ src: 'recommend', id: 1, price: 188 }, { src: 'recommend', id: 2, price: 188 }, { src: 'recommend', id: 3, price: 188 },
            { src: 'recommend', id: 4, price: 188 }, { src: 'recommend', id: 5, price: 188 }, { src: 'recommend', id: 6, price: 188 }]
          })
          break;
        case '2':
          res.json({
            data: [{ src: 'recommend', id: 7, price: 188 }, { src: 'recommend', id: 8, price: 188 }, { src: 'recommend', id: 9, price: 188 },
            { src: 'recommend', id: 10, price: 188 }, { src: 'recommend', id: 11, price: 188 }, { src: 'recommend', id: 12, price: 188 }]
          })
          break;
        case '3':
          res.json({
            data: [{ src: 'recommend', id: 13, price: 188 }, { src: 'recommend', id: 14, price: 188 }, { src: 'recommend', id: 15, price: 188 },
            { src: 'recommend', id: 16, price: 188 }, { src: 'recommend', id: 17, price: 188 }, { src: 'recommend', id: 18, price: 188 }]
          })
          break;
      }
    }
    if (type == 'pop') {
      switch (page) {
        case '1':
          res.json({
            data: [{ src: 'pop', id: 1, price: 188 }, { src: 'pop', id: 2, price: 188 }, { src: 'pop', id: 3, price: 188 },
            { src: 'pop', id: 4, price: 188 }, { src: 'pop', id: 5, price: 188 }, { src: 'pop', id: 6, price: 188 }]
          })
          break;
        case '2':
          res.json({
            data: [{ src: 'pop', id: 7, price: 188 }, { src: 'pop', id: 8, price: 188 }, { src: 'pop', id: 9, price: 188 },
            { src: 'pop', id: 10, price: 188 }, { src: 'pop', id: 11, price: 188 }, { src: 'pop', id: 12, price: 188 }]
          })
          break;
        case '3':
          res.json({
            data: [{ src: 'pop', id: 13, price: 188 }, { src: 'pop', id: 14, price: 188 }, { src: 'pop', id: 15, price: 188 },
            { src: 'pop', id: 16, price: 188 }, { src: 'pop', id: 17, price: 188 }, { src: 'pop', id: 18, price: 188 }]
          })
          break;
      }
    } if (type == 'hot') {
      switch (page) {
        case '1':
          res.json({
            data: [{ src: 'hot', id: 1, price: 188 }, { src: 'hot', id: 2, price: 188 }, { src: 'hot', id: 3, price: 188 },
            { src: 'hot', id: 4, price: 188 }, { src: 'hot', id: 5, price: 188 }, { src: 'hot', id: 6, price: 188 }]
          })
          break;
        case '2':
          res.json({
            data: [{ src: 'hot', id: 7, price: 188 }, { src: 'hot', id: 8, price: 188 }, { src: 'hot', id: 9, price: 188 },
            { src: 'hot', id: 10, price: 188 }, { src: 'hot', id: 11, price: 188 }, { src: 'hot', id: 12, price: 188 }]
          })
          break;
        case '3':
          res.json({
            data: [{ src: 'hot', id: 13, price: 188 }, { src: 'hot', id: 14, price: 188 }, { src: 'hot', id: 15, price: 188 },
            { src: 'hot', id: 16, price: 188 }, { src: 'hot', id: 17, price: 188 }, { src: 'hot', id: 18, price: 188 }]
          })
          break;
      }
    } if (type == 'season') {
      switch (page) {
        case '1':
          res.json({
            data: [{ src: 'season', id: 1, price: 188 }, { src: 'season', id: 2, price: 188 }, { src: 'season', id: 3, price: 188 },
            { src: 'season', id: 4, price: 188 }, { src: 'season', id: 5, price: 188 }, { src: 'season', id: 6, price: 188 }]
          })
          break;
        case '2':
          res.json({
            data: [{ src: 'season', id: 7, price: 188 }, { src: 'season', id: 8, price: 188 }, { src: 'season', id: 9, price: 188 },
            { src: 'season', id: 10, price: 188 }, { src: 'season', id: 11, price: 188 }, { src: 'season', id: 12, price: 188 }]
          })
          break;
        case '3':
          res.json({
            data: [{ src: 'season', id: 13, price: 188 }, { src: 'season', id: 14, price: 188 }, { src: 'season', id: 15, price: 188 },
            { src: 'season', id: 16, price: 188 }, { src: 'season', id: 17, price: 188 }, { src: 'season', id: 18, price: 188 }]
          })
          break;
      }
    }
  })
  app.get('/detail/', (req, res) => {
    console.log(req.query);
    let { type, page } = req.query;
    res.json({
      data: [{ src: 'recommend', id: 1, price: 188 }, { src: 'recommend', id: 2, price: 188 }, { src: 'recommend', id: 3, price: 188 },
      { src: 'recommend', id: 4, price: 188 }, { src: 'recommend', id: 5, price: 188 }, { src: 'recommend', id: 6, price: 188 }]
    })
  })
  app.post('/login/', (req, res) => {
    // console.log(req.query);
    let { userName, password } = req.query;
    if (userName == '123456' && password == 'administrator') {
      res.json({
        data: [1, 2, 3, 4]
      })
    }
  })
  
  /* 监听端口 */
  app.listen(3000, () => {
    console.log('listen:3000');
  })`,

    1:
      `const http = require('http');
  const hostname = '127.0.0.1';
  const port = 3000;
  
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });
  
  server.listen(port, hostname, () => {
  
  });`,
    2: "c3",
    3: "d4",
  }
}