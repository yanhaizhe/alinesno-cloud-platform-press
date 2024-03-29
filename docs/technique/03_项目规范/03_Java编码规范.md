# 编码的基本规范

> 此处参考阿里巴巴编码规范

## 命名规范

1.【强制】 代码中的命名均不能以下划线或美元符号开始，也不能以下划线或美元符号结束。

```
反例： _name / __name / $Object / name_ / name$ / Object$
```

2.【强制】 代码中的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。
说明：正确的英文拼写和语法可以让阅读者易于理解，避免歧义。注意，即使纯拼音命名方式
也要避免采用。

```
反例： DaZhePromotion [打折] / getPingfenByName() [评分] / int 某变量 = 3
正例： alibaba / taobao / youku / hangzhou 等国际通用的名称，可视同英文。
```

3.【强制】类名使用 UpperCamelCase 风格，必须遵从驼峰形式，但以下情形例外：（领域模型
的相关命名）DO / BO / DTO / VO 等。

```
正例：MarcoPolo / UserDO / XmlService / TcpUdpDeal / TaPromotion
反例：macroPolo / UserDo / XMLService / TCPUDPDeal / TAPromotion
```

4.【强制】方法名、参数名、成员变量、局部变量都统一使用 lowerCamelCase 风格，必须遵从
驼峰形式。

```
正例： localValue / getHttpMessage() / inputUserId
```

5.【强制】常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长。

```
正例： MAX_STOCK_COUNT
反例： MAX_COUNT
```

6.【强制】抽象类命名使用 Abstract 或 Base 开头；异常类命名使用 Exception 结尾；测试类
命名以它要测试的类的名称开始，以 Test 结尾。

7.【强制】中括号是数组类型的一部分，数组定义如下：String[] args;

```
反例：使用 String args[]的方式来定义。
```

8.【强制】POJO 类中布尔类型的变量，都不要加 is，否则部分框架解析会引起序列化错误

```
反例：定义为基本数据类型 boolean isSuccess；
```

它的方法也是 isSuccess()，RPC(dubbo)框架在反向解析的时候，“以为”对应的属性名称是 success，导致属性获取不到，进而抛出异常。

9.【强制】包名统一使用小写，点分隔符之间有且仅有一个自然语义的英语单词。包名统一使用
单数形式，但是类名如果有复数含义，类名可以使用复数形式。

```
正例： 应用工具类包名为 com.capinfo.net.util、类名为 MessageUtils（此规则参考
spring的框架结构）
```

10.【强制】杜绝完全不规范的缩写，避免望文不知义。

```
反例： AbstractClass“缩写”命名成 AbsClass；condition“缩写”命名成 condi
```

此类随意缩写严重降低了代码的可阅读性。

11.【推荐】如果使用到了设计模式，建议在类名中体现出具体模式。
说明：将设计模式体现在名字中，有利于阅读者快速理解架构设计思想。

```
正例：public class OrderFactory;
public class LoginProxy;
public class ResourceObserver;
```

12.【推荐】接口类中的方法和属性不要加任何修饰符号（public 也不要加），保持代码的简洁
性，并加上有效的 Javadoc 注释。尽量不要在接口里定义变量，如果一定要定义变量，肯定是
与接口方法相关，并且是整个应用的基础常量。

```
正例：接口方法签名：void f();
接口基础常量表示：String COMPANY = "alibaba";
反例：接口方法定义：public abstract void f();
```

`说明：JDK8中接口允许有默认实现，那么这个 default方法，是对所有实现类都有价值的默认实现。`

13.接口和实现类的命名有两套规则：
1）【强制】对于 Service 和 DAO 类，基于 SOA 的理念，暴露出来的服务一定是接口，内部
的实现类用 Impl 的后缀与接口区别。

```
正例：CacheServiceImpl实现 CacheService接口。
```

2）【推荐】如果是形容能力的接口名称，取对应的形容词做接口名（通常是–able 的形式）。

```
正例：AbstractTranslator实现 Translatable。
```

14.【参考】枚举类名建议带上 Enum 后缀，枚举成员名称需要全大写，单词间用下划线隔开。
说明：枚举其实就是特殊的常量类，且构造方法被默认强制是私有。

```
正例：枚举名字：DealStatusEnum，成员名称：SUCCESS / UNKOWN_REASON。
```

15.【参考】各层命名规约：

```
//A) Service/DAO层方法命名规约
1） 获取单个对象的方法用 get做前缀。
2） 获取多个对象的方法用 list做前缀。
3） 获取统计值的方法用 count做前缀。
4） 插入的方法用 save（推荐）或 insert做前缀。
5） 删除的方法用 remove（推荐）或 delete做前缀。
6） 修改的方法用 update做前缀。
//B) 领域模型命名规约
1） 数据对象：xxxDO，xxx即为数据表名。
2） 数据传输对象：xxxDTO，xxx为业务领域相关的名称。
3） 展示对象：xxxVO，xxx一般为网页名称。
4） POJO是 DO/DTO/BO/VO的统称，禁止命名成 xxxPOJO。
```

16.【参考】import 时使用星号“\*”会消耗更多的应用资源，因此要避免使用，在当前类如果引用其它类的方法，那么就明确的 import 该方法所属的类文件。此外要避免 import 的类没有被使用或者重复,可以使用`Ctrl+Shirt+o` 去掉多余的引用

17.【推荐】避免魔法数,也叫 MagicNumber，会让程序不可读。比如：

```
反例：sex = 0
//把 sex 变量的值初始化为 “男性”
正例：public static final int MALE= 0; sex = MALE;
```

18.【强制】字符串(String)的比较,检查字符串的比较时没有使用 == 或!=,正确的写法是：

```
反例: if ("something" == x)
正例：if ("something".equals(x))
```

19.【推荐】避免 try-catch 的嵌套的层次过多而降低代码可读性。建议最大的嵌套深度不超过 3 层。

20.【推荐】规范 SQL 语句的编写,如果需要编写 SQL 语句，则当编写的 SQL 语句过长时，需要对 SQL 语句字符串进行拆分，并且每行字符串前端需要有一空格。普通代码也要相似处理，尽量不需要拖动滚动条而显示完整代码:

```
正例:
//实现XXXXXXXXX功能的SQL语句
String loanTypeSql = "select count(lpj.ID) from LY_DAIKUANG_PJ lpj"
    + " left join LY_DAIKUANG_TOUPIAO ltp"
    + " on ltp.id = lpj.FLD_TOUPIAO_ID"
    + " where (lpj.PLD_TW_OBJ is null or trim(lpj.PLD_TW_OBJ) = '''')"
    + " and (lpj.PLD_QK is null or trim(lpj.PLD_QK) = '''')"
    + " and ltp.FLD_SHENYIDAN_ID = ''{0}''";
```

## 面向对象规范

1.【强制】避免通过一个类的对象引用访问此类的静态变量或静态方法，无谓增加编译器解析成
本，直接用类名来访问即可。

2.【强制】所有的覆写方法，必须加@Override 注解。

```
反例：getObject()与 get0bject()的问题。
```

一个是字母的 O，一个是数字的 0，加@Override 可以准确判断是否覆盖成功。另外，如果在抽象类中对方法签名进行修改，其实现类会马上编译报错。

3.【强制】相同参数类型，相同业务含义，才可以使用 Java 的可变参数，避免使用 Object。
说明：可变参数必须放置在参数列表的最后。（提倡同学们尽量不用可变参数编程）

```
正例：public User getUsers(String type, Integer... ids)
```

4.【强制】对外暴露的接口签名，原则上不允许修改方法签名，避免对接口调用方产生影响。接
口过时必须加@Deprecated 注解，并清晰地说明采用的新接口或者新服务是什么。

5.【强制】不能使用过时的类或方法。

```
说明：java.net.URLDecoder 中的方法 decode(StringencodeStr)
```

这个方法已经过时，应该使用双参数 decode(String source, String encode)。接口提供方既然明确是过时接口，那么有义务同时提供新的接口；作为调用方来说，有义务去考证过时方法的新实现是什么。 6.【强制】Object 的 equals 方法容易抛空指针异常，应使用常量或确定有值的对象来调用
equals。

```
正例： "test".equals(object);
反例： object.equals("test");
```

说明：推荐使用 java.util.Objects#equals （JDK7 引入的工具类）

7.【强制】所有的相同类型的包装类对象之间值的比较，全部使用 equals 方法比较。

说明：对于 Integer var=?在-128 至 127 之间的赋值，Integer 对象是在
IntegerCache.cache 产生，会复用已有对象，这个区间内的 Integer 值可以直接使用==进行
判断，但是这个区间之外的所有数据，都会在堆上产生，并不会复用已有对象，这是一个大坑，
推荐使用 equals 方法进行判断。

8.【强制】关于基本数据类型与包装数据类型的使用标准如下：
1） 所有的 POJO 类属性必须使用包装数据类型。
2） RPC 方法的返回值和参数必须使用包装数据类型。
3） 所有的局部变量【推荐】使用基本数据类型。

说明：POJO 类属性没有初值是提醒使用者在需要使用时，必须自己显式地进行赋值，任何
NPE 问题，或者入库检查，都由使用者来保证。

```
正例：数据库的查询结果可能是 null，因为自动拆箱，用基本数据类型接收有 NPE风险。
反例：比如显示成交总额涨跌情况，即正负 x%，x为基本数据类型，调用的 RPC服务，调用
不成功时，返回的是默认值，页面显示：0%，这是不合理的，应该显示成中划线-。所以包装
数据类型的 null值，能够表示额外的信息，如：远程调用失败，异常退出。
```

9.【强制】定义 DO/DTO/VO 等 POJO 类时，不要设定任何属性默认值。

```
反例：POJO类的 gmtCreate默认值为 new Date();但是这个属性在数据提取时并没有置入具
体值，在更新其它字段时又附带更新了此字段，导致创建时间被修改成当前时间。
```

10.【强制】序列化类新增属性时，请不要修改 serialVersionUID 字段，避免反序列失败；如
果完全不兼容升级，避免反序列化混乱，那么请修改 serialVersionUID 值。
`说明：注意 serialVersionUID不一致会抛出序列化运行时异常。`

11.【强制】构造方法里面禁止加入任何业务逻辑，如果有初始化逻辑，请放在 init 方法中。

12.【强制】POJO 类必须写 toString 方法。使用 IDE 的中工具：source>generate toString
时，如果继承了另一个 POJO 类，注意在前面加一下 super.toString。
说明：在方法执行抛出异常时，可以直接调用 POJO 的 toString()方法打印其属性值，便于排
查问题。

13.【推荐】使用索引访问用 String 的 split 方法得到的数组时，需做最后一个分隔符后有无
内容的检查，否则会有抛 IndexOutOfBoundsException 的风险。
说明：

```
String str = "a,b,c,,";
String[] ary = str.split(",");
//预期大于 3，结果是 3
System.out.println(ary.length);
```

14.【推荐】当一个类有多个构造方法，或者多个同名方法，这些方法应该按顺序放置在一起，
便于阅读。

15.【推荐】 类内方法定义顺序依次是：公有方法或保护方法 > 私有方法 > getter/setter
方法。

```
说明：公有方法是类的调用者和维护者最关心的方法，首屏展示最好；保护方法虽然只是子类
关心，也可能是“模板设计模式”下的核心方法；而私有方法外部一般不需要特别关心，是一个
黑盒实现；因为方法信息价值较低，所有 Service和 DAO的 getter/setter方法放在类体最
后。
```

16.【推荐】setter 方法中，参数名称与类成员变量名称一致，this.成员名=参数名。在
getter/setter 方法中，尽量不要增加业务逻辑，增加排查问题的难度。

```
反例：
public Integer getData(){
	if(true) {
		return data + 100;
	} else {
		return data - 100;
	}
}
```

17.【推荐】循环体内，字符串的联接方式，使用 StringBuilder 的 append 方法进行扩展。

```
反例：
	String str = "start";
	for(int i=0; i<100; i++){
		str = str + "hello";
	}
```

说明：反编译出的字节码文件显示每次循环都会 new 出一个 StringBuilder 对象，然后进行
append 操作，最后通过 toString 方法返回 String 对象，造成内存资源浪费。

18.【推荐】final 可提高程序响应效率，声明成 final 的情况：

```
1） 不需要重新赋值的变量，包括类属性、局部变量。
2） 对象参数前加 final，表示不允许修改引用的指向。
3） 类方法确定不允许被重写。
```

19.【推荐】慎用 Object 的 clone 方法来拷贝对象。
说明：对象的 clone 方法默认是浅拷贝，若想实现深拷贝需要重写 clone 方法实现属性对象
的拷贝。

20.【推荐】类成员与方法访问控制从严：

```
1） 如果不允许外部直接通过 new来创建对象，那么构造方法必须是 private。
2） 工具类不允许有 public或 default构造方法。
3） 类非 static成员变量并且与子类共享，必须是 protected。
4） 类非 static成员变量并且仅在本类使用，必须是 private。
5） 类 static成员变量如果仅在本类使用，必须是 private。
6） 若是 static成员变量，必须考虑是否为 final。
7） 类成员方法只供类内部调用，必须是 private。
8） 类成员方法只对继承类公开，那么限制为 protected。
```

说明：任何类、方法、参数、变量，严控访问范围。

## 代码风格

1.【强制】大括号的使用约定。如果是大括号内为空，则简洁地写成{}即可，不需要换行；如果
是非空代码块则：

```
1） 左大括号前不换行。
2） 左大括号后换行。
3） 右大括号前换行。
4） 右大括号后还有 else等代码则不换行；表示终止右大括号后必须换行。
```

2.【强制】 左括号和后一个字符之间不出现空格；同样，右括号和前一个字符之间也不出现空
格。详见第 5 条下方正例提示。

3.【强制】if/for/while/switch/do 等保留字与左右括号之间都必须加空格。

4.【强制】任何运算符左右必须加一个空格。
`说明：运算符包括赋值运算符=、逻辑运算符&&、加减乘除符号、三目运行符等。`

5.【强制】缩进采用 4 个空格，禁止使用 tab 字符。
说明：如果使用 tab 缩进，必须设置 1 个 tab 为 4 个空格。IDEA 设置 tab 为 4 个空格时，
请勿勾选 Use tab character；而在 eclipse 中，必须勾选 insert spaces for tabs。

```
正例： （涉及 1-5点）
public static void main(String[] args) {
	// 缩进 4个空格
	String say = "hello";
	// 运算符的左右必须有一个空格
	int flag = 0;
	// 关键词 if与括号之间必须有一个空格，括号内的 f与左括号，0与右括号不需要空格
	if (flag == 0) {
		System.out.println(say);
	}
		// 左大括号前加空格且不换行；左大括号后换行
	if (flag == 1) {
		System.out.println("world");
		// 右大括号前换行，右大括号后有 else，不用换行
	} else {
		System.out.println("ok");
		// 在右大括号后直接结束，则必须换行
	}
}
```

6.【强制】单行字符数限制不超过 120 个，超出需要换行，换行时遵循如下原则：
1） 第二行相对第一行缩进 4 个空格，从第三行开始，不再继续缩进，参考示例。
2） 运算符与下文一起换行。
3） 方法调用的点符号与下文一起换行。
4） 在多个参数超长，逗号后进行换行。
5） 在括号前不要换行，见反例。

```
正例：
	StringBuffer sbuf = new StringBuffer();
	//超过 120个字符的情况下，换行缩进 4个空格，并且方法前的点符号一起换行
	sbuf.append("zi").append("xin")...
		.append("huang")...
		.append("huang")...
		.append("huang");
反例：
	StringBuffer sb = new StringBuffer();
	//超过 120个字符的情况下，不要在括号前换行
	sb.append("zi").append("xin")...append
		("huang");

	//参数很多的方法调用可能超过 120个字符，不要在逗号前换行
	method(args1, args2, args3, ...
		, argsX);
```

7.【强制】方法参数在定义和传入时，多个参数逗号后边必须加空格。

```
正例：下例中实参的"a",后边必须要有一个空格。
method("a", "b", "c");
```

8.【强制】IDE 的 text file encoding 设置为 UTF-8; IDE 中文件的换行符使用 Unix 格式，不要使用 windows 格式。

9.【推荐】没有必要增加若干空格来使某一行的字符与上一行的相应字符对齐。

```
正例：
	int a = 3;
	long b = 4L;
	float c = 5F;
	StringBuffer sb = new StringBuffer();
```

说明：增加 sb 这个变量，如果需要对齐，则给 a、b、c 都要增加几个空格，在变量比较多的
情况下，是一种累赘的事情。

10.【推荐】方法体内的执行语句组、变量的定义语句组、不同的业务逻辑之间或者不同的语义
之间插入一个空行。相同业务逻辑和语义之间不需要插入空行。
说明：没有必要插入多行空格进行隔开。

# 异常日志

## 描述

日志和异常输出的规范

## 异常处理

1.【强制】不要捕获 Java 类库中定义的继承自 RuntimeException 的运行时异常类，如：
IndexOutOfBoundsException / NullPointerException，这类异常由程序员预检查
来规避，保证程序健壮性。

```
正例：if(obj != null) {...}
反例：try { obj.method() } catch(NullPointerException e){...}
```

2.【强制】异常不要用来做流程控制，条件控制，因为异常的处理效率比条件分支低。

3.【强制】对大段代码进行 try-catch，这是不负责任的表现。catch 时请分清稳定代码和非稳
定代码，稳定代码指的是无论如何不会出错的代码。对于非稳定代码的 catch 尽可能进行区分
异常类型，再做对应的异常处理。

4.【强制】捕获异常是为了处理它，不要捕获了却什么都不处理而抛弃之，如果不想处理它，请
将该异常抛给它的调用者。最外层的业务使用者，必须处理异常，将其转化为用户可以理解的
内容。

5.【强制】有 try 块放到了事务代码中，catch 异常后，如果需要回滚事务，一定要注意手动回
滚事务。

6.【强制】finally 块必须对资源对象、流对象进行关闭，有异常也要做 try-catch。

```
说明：如果 JDK7，可以使用 try-with-resources方式。
```

7.【强制】不能在 finally 块中使用 return，finally 块中的 return 返回后方法结束执行，不
会再执行 try 块中的 return 语句。

8.【强制】捕获异常与抛异常，必须是完全匹配，或者捕获异常是抛异常的父类。

```
说明：如果预期对方抛的是绣球，实际接到的是铅球，就会产生意外情况。
```

9.【推荐】方法的返回值可以为 null，不强制返回空集合，或者空对象等，必须添加注释充分

```
说明什么情况下会返回 null值。调用方需要进行 null判断防止 NPE问题。
说明：本规约明确防止 NPE是调用者的责任。即使被调用方法返回空集合或者空对象，对调用
者来说，也并非高枕无忧，必须考虑到远程调用失败，运行时异常等场景返回 null的情况。
```

10.【推荐】防止 NPE，是程序员的基本修养，注意 NPE 产生的场景：

```
1） 返回类型为包装数据类型，有可能是 null，返回 int值时注意判空。
反例：public int f(){ return Integer对象}; 如果为 null，自动解箱抛 NPE。
2） 数据库的查询结果可能为 null。
3） 集合里的元素即使 isNotEmpty，取出的数据元素也可能为 null。
4） 远程调用返回对象，一律要求进行 NPE判断。
5） 对于 Session中获取的数据，建议 NPE检查，避免空指针。
6） 级联调用 obj.getA().getB().getC()；一连串调用，易产生 NPE。
```

11.【推荐】在代码中使用“抛异常”还是“返回错误码”，对于团队外的 http/api 开放接口必须
使用“错误码”；而应用内部推荐异常抛出；跨应用间 RPC 调用优先考虑使用 Result 方式，封
装 isSuccess、“错误码”、“错误简短信息”。

```
说明：关于 RPC方法返回方式使用 Result方式的理由：
1）使用抛异常返回方式，调用方如果没有捕获到就会产生运行时错误。
2）如果不加栈信息，只是 new自定义异常，加入自己的理解的 error message，对于调用端解决问题的帮助不会太多。如果加了栈信息，在频繁调用出错的情况下，数据序列化和传输的性能损耗也是问题。
```

12.【推荐】定义时区分 unchecked/checked 异常，避免直接使用 RuntimeException 抛出，
更不允许抛出 Exception 或者 Throwable，应使用有业务含义的自定义异常。推荐业界已定义
过的自定义异常，

```
如：DAOException / ServiceException等。
```

13.【参考】避免出现重复的代码（Don’t Repeat Yourself），即 DRY 原则。

```
说明：随意复制和粘贴代码，必然会导致代码的重复，在以后需要修改时，需要修改所有的副
本，容易遗漏。必要时抽取共性方法，或者抽象公共类，甚至是共用模块。
```

```
正例：一个类中有多个 public方法，都需要进行数行相同的参数校验操作，这个时候请抽取：
private boolean checkParam(DTO dto){...}
```

## 日志规范

1.【强制】应用中不可直接使用日志系统（Log4j、Logback）中的 API，而应依赖使用日志框架
SLF4J 中的 API，使用门面模式的日志框架，有利于维护和各个类的日志处理方式统一。

```
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
private static final Logger logger = LoggerFactory.getLogger(Abc.class);
```

2.【强制】日志文件推荐至少保存 15 天，因为有些异常具备以“周”为频次发生的特点。

3.【强制】应用中的扩展日志（如打点、临时监控、访问日志等）命名方式：

- appName_logType_logName.log。
- logType:日志类型，推荐分类有
- stats/desc/monitor/visit 等；
- logName:日志描述。
  这种命名的好处：通过文件名就可知道日志文件属于什么应用，什么类型，什么目的，也有利于归类查找。

```
正例：mppserver应用中单独监控时区转换异常，如：
mppserver_monitor_timeZoneConvert.log
```

说明：推荐对日志进行分类，错误日志和业务日志尽量分开存放，便于开发人员查看，也便于
通过志对系统进行及时监控

4.【强制】对 trace/debug/info 级别的日志输出，必须使用条件输出形式或者使用占位符的方
式。

```
说明：logger.debug("Processing trade with id: " + id + " symbol: " + symbol);
如果日志级别是 warn，上述日志不会打印，但是会执行字符串拼接操作，如果 symbol是对象，
会执行 toString()方法，浪费了系统资源，执行了上述操作，最终日志却没有打印。

正例：（条件）
if (logger.isDebugEnabled()) {
	logger.debug("Processing trade with id: " + id + " symbol: " + symbol);
}
正例：（占位符）
	logger.debug("Processing trade with id: {} symbol : {} ", id, symbol);
```

5.【强制】避免重复打印日志，浪费磁盘空间，务必在 log4j.xml 中设置 additivity=false。

```
正例：<logger name="com.taobao.dubbo.config" additivity="false">
```

6.【强制】异常信息应该包括两类信息：案发现场信息和异常堆栈信息。如果不处理，那么往上
抛。

```
正例：logger.error(各类参数或者对象 toString + "_" + e.getMessage(), e);
```

7.【推荐】可以使用 warn 日志级别来记录用户输入参数错误的情况，避免用户投诉时，无所适
从。注意日志输出的级别，error 级别只记录系统逻辑出错、异常等重要的错误信息。如非必
要，请不要在此场景打出 error 级别。

8.【推荐】谨慎地记录日志。生产环境禁止输出 debug 日志；有选择地输出 info 日志；如果使
用 warn 来记录刚上线时的业务行为信息，一定要注意日志输出量的问题，避免把服务器磁盘
撑爆，并记得及时删除这些观察日志。

```
说明：大量地输出无效日志，不利于系统性能提升，也不利于快速定位错误点。记录日志时请
思考：这些日志真的有人看吗？看到这条日志你能做什么？能不能给问题排查带来好处？
```

# 单元测试规范

**单元测试应遵守以下规则**

1.【强制】测试代码应该位于 test 源码包下，且按测试的类划分目录；

2.【推荐】测试代码需要独立运行，配置文件：如`spring.xml` 尽量不要与项目配置重合，避免打印时，将测试的配置一起打包；

3.【推荐】单元测试如果存在多种情况，应尽量测试到位，避免出现方法不健壮，而导致其它引用出现异常；
如：
方法

```
	public String hello(String name){return name} ;
```

测试代码：

```
 JavaBeanDescriptor descriptor;
 descriptor = JavaBeanSerializeUtil.serialize(Integer.MAX_VALUE);
 Assert.assertTrue(descriptor.isPrimitiveType());
 Assert.assertEquals(Integer.MAX_VALUE,
 descriptor.getPrimitiveProperty());

 Date now = new Date();
 descriptor = JavaBeanSerializeUtil.serialize(now);
 Assert.assertTrue(descriptor.isPrimitiveType());
 Assert.assertEquals(now, descriptor.getPrimitiveProperty());
```

4.【强制】测试名称及代码要严格按 Junit4 规则，便于与 maven 测试插件整合，生成测试报告和后期发布时，CI 工具进行自动化测试。

- 无
