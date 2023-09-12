/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/11/zui-xiao-sheng-cheng-shu-kruskal-suan-fa/index.html","e8f55fbd3e15ae2e43e971876ae65321"],["/2020/11/11/zui-xiao-sheng-cheng-shu-kruskal-suan-fa/图1.png","8016aba37777c1e9e9d4278be442f0e2"],["/2020/11/11/zui-xiao-sheng-cheng-shu-kruskal-suan-fa/图2.png","1a8848414dee20c7acf3b281d0fa9ac6"],["/2020/11/11/zui-xiao-sheng-cheng-shu-kruskal-suan-fa/图3.png","0e551065535f00a4fa9a7f505048dd50"],["/2020/11/11/zui-xiao-sheng-cheng-shu-kruskal-suan-fa/图4.png","50f23394c8251c7de6ec024e07a9c8c4"],["/2020/11/11/zui-xiao-sheng-cheng-shu-kruskal-suan-fa/图5.png","755fbfd6c24776a7dec6aef0677a1d09"],["/2020/11/11/zui-xiao-sheng-cheng-shu-kruskal-suan-fa/图6.jpg","092004d455b591b51ab789d95b8f991f"],["/2020/11/11/zui-xiao-sheng-cheng-shu-kruskal-suan-fa/图7.jpg","179b71b954dc1dc972ec41a7d4148d08"],["/2020/11/11/zui-xiao-sheng-cheng-shu-kruskal-suan-fa/图8.jpg","dada6fada2d7a0d61d3a5d9e48c81a4c"],["/2020/11/11/zui-xiao-sheng-cheng-shu-kruskal-suan-fa/图9.jpg","794f6370a867f812d0a62a8a575a9710"],["/2021/11/12/zui-duan-lu-jing-dijkstra-suan-fa/Dijkstra算法步骤.png","1132426f261d42b81d0b4a3e7f81b77d"],["/2021/11/12/zui-duan-lu-jing-dijkstra-suan-fa/index.html","308dcafd46311cb31f981366be17e9fe"],["/2022/05/01/ren-sheng-hai-hai-du-hou-gan/index.html","f9f3e6d99be4e7fe20e9ae9079491daf"],["/2022/07/12/ji-qi-xue-xi-1-jue-ce-shu/index.html","ef231036b5de9e09068100ffd9fb720c"],["/2022/07/12/ji-qi-xue-xi-1-jue-ce-shu/图1.jpg","1ac470b3687553a1e8f4bcfd1eeabad5"],["/2022/07/12/ji-qi-xue-xi-1-jue-ce-shu/图10.jpg","f0f7b56baa267a37724c628f347e1dd5"],["/2022/07/12/ji-qi-xue-xi-1-jue-ce-shu/图11.jpg","ed63bf8ecdfcddb2442fb6c1525368eb"],["/2022/07/12/ji-qi-xue-xi-1-jue-ce-shu/图12.jpg","0ef7e54c2ee81dc107a718b6c9668765"],["/2022/07/12/ji-qi-xue-xi-1-jue-ce-shu/图13.jpg","ddc7ae6a261bc8da7bf73053066684ee"],["/2022/07/12/ji-qi-xue-xi-1-jue-ce-shu/图2.jpg","0b4a795442f8397b85ee26dd219108c0"],["/2022/07/12/ji-qi-xue-xi-1-jue-ce-shu/图3.jpg","6c9f7d58cb1eab000b06e391fc7217f3"],["/2022/07/12/ji-qi-xue-xi-1-jue-ce-shu/图4.jpg","1cb60e2737fc1a11226c3283d65a1c6e"],["/2022/07/12/ji-qi-xue-xi-1-jue-ce-shu/图5.jpg","c0253ea6a943fffd0801c125d383ab88"],["/2022/07/12/ji-qi-xue-xi-1-jue-ce-shu/图6.jpg","b94b50543bf0ef41fbf328ade99e0294"],["/2022/07/12/ji-qi-xue-xi-1-jue-ce-shu/图7.jpg","d56859e05c125836e6f265b049eaeff4"],["/2022/07/12/ji-qi-xue-xi-1-jue-ce-shu/图8.jpg","eaa30cd81bee3e35b5dc648f1182d66f"],["/2022/07/12/ji-qi-xue-xi-1-jue-ce-shu/图9.jpg","a2825eebec32d29c5aeb850b619775d0"],["/2022/07/13/ji-qi-xue-xi-2-po-su-bei-xie-si/index.html","e987a0c3d0a714726cdbca0303febe30"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/index.html","fb24aafae467f9b89a72ec01136f62aa"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图1.jpg","faef926351992c492de5a2192d390edc"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图10.jpg","cc4e415a5d6b315c9868b1fbdd624b15"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图11.jpg","6b74e2988221c4a1205a8387524d4acb"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图12.jpg","f878110d5b73bb3adc9b36692cd601a1"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图13.jpg","adbfd2dbdc04d1a380cce3a52e88e91b"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图14.jpg","11e9b6a7f866514b35d3746f13395073"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图15.jpg","32109ffae8ca1bee5759c918b256ae35"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图16.jpg","8e29bb6d497adcb87d1de9fd8934430b"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图17.jpg","d4c72a02c10e9712ed7b64daaefab25e"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图18.jpg","7170dcc33c09f7f614275fb02251ed30"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图19.jpg","b50abe2e2f97210c04c506b8c4df010c"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图2.jpg","d1e2071139a295eca3b933cb4312243f"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图20.jpg","3c265efc8e4f5658738a6efe68ed64d3"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图21.jpg","893e2340797f618d3d697c1a52290942"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图22.jpg","6b09139a45bc1d3b218df622d7e45002"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图23.jpg","f3dfa0bb68429d815fda0708292e35e3"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图24.jpg","88f9322be02d3447400722c79fc90aca"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图3.jpg","91d6af6bbd38270462ef73c7be91c0b1"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图4.jpg","4dceb35bdaeb59eb5a2012d82c577d13"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图5.jpg","ec583cd303ed44fac28cff4dfcc55c1c"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图6.jpg","c272658366029ac3f83d790692a86bcb"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图7.jpg","c2ffdd252ba62f94fd023a6b8804c758"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图8.jpg","956b79ac393199d9cb7b8af9fd8ed2d3"],["/2022/07/13/ji-qi-xue-xi-3-zhi-chi-xiang-liang-ji/图9.jpg","673afed1b24c4c344bcc8c258c8eec3f"],["/2022/07/15/ji-qi-xue-xi-4-wu-jian-du-xue-xi/index.html","efc4b90d5d604194530b3e317f427754"],["/2022/07/15/ji-qi-xue-xi-4-wu-jian-du-xue-xi/图1.gif","169818722555497ae9d461a7352fabd1"],["/2022/07/15/ji-qi-xue-xi-4-wu-jian-du-xue-xi/图2.jpg","51b4ae258b49e63586d10410e6edaf01"],["/2022/07/15/ji-qi-xue-xi-4-wu-jian-du-xue-xi/图3.jpg","dd783588986b12f38817b5158b9d9ddd"],["/2022/07/15/ji-qi-xue-xi-4-wu-jian-du-xue-xi/图4.jpg","8f13d94c17a83771f13baf683dbec52c"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/index.html","b5567209c1ced65dc9b8de9acb73a6a3"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图1.jpg","939d74dddc456e7359edcde683aebbd7"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图10.png","6bed87d8b821ff37ad7a87f624fe4a5a"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图11.png","57d4e0f8c1671594f2dbfa4d0bfa98a8"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图12.png","86dfae579c9d2eb2acc12da7271ed879"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图13.png","cc93a906234315fa63eccead1e3dc4f9"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图14.png","2bb418ae1ad67632471d3ad157ce0ad0"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图15.png","681fc3dca50c4a3bee85fb8ca801a5fb"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图16.png","00c9d938b8dd219a2adb831f543c0bcb"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图17.png","3f8ac017f0120665f78767d700d83004"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图18.png","3050afb38ae51530d4dc96c10e231656"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图19.gif","23d1e12737a62b0fab7a09e9c18da1d8"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图2.png","353d51dd649a5e656e10f6fdefed87e3"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图20.png","48a7f039a020ed68f478361b190540a2"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图21.png","3c47367c81c81eacd8f82d8b054b1443"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图3.png","e0e45feaf86ad5870445218f0b702e2d"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图4.png","589079a06e9527e9eecadbb4fa2a57cf"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图5.png","25a2d13d4fb081b90fd0f26433813807"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图6.png","30db3165acb8f0e1bf3362dd448c35c2"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图7.png","4d28a8bd165eb48d83fdab3aa3668c90"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图8.jpg","6a8b8d8d3e886da445f2fa4416c0043a"],["/2022/07/16/shen-du-xue-xi-1-shen-du-shen-jing-wang-luo/图9.png","2d8639bce433283c8f38b016ef7dc0e5"],["/2022/07/18/shen-du-xue-xi-2-juan-ji-shen-jing-wang-luo/index.html","4497e2fd98e22363d936ea3c369c9f4a"],["/2022/07/18/shen-du-xue-xi-2-juan-ji-shen-jing-wang-luo/图1.gif","61c2a830ee8003682752272b7e1279dd"],["/2022/07/18/shen-du-xue-xi-2-juan-ji-shen-jing-wang-luo/图10.png","d2f55ada70d2b399e6e9e5e4f0669e70"],["/2022/07/18/shen-du-xue-xi-2-juan-ji-shen-jing-wang-luo/图11.png","416ada833001a3b9bcb1abcc95e65867"],["/2022/07/18/shen-du-xue-xi-2-juan-ji-shen-jing-wang-luo/图12.png","d5fba4c88282c80047b9e608e908d0c8"],["/2022/07/18/shen-du-xue-xi-2-juan-ji-shen-jing-wang-luo/图13.png","a980ce84e950c6f45242e0561c8e1f94"],["/2022/07/18/shen-du-xue-xi-2-juan-ji-shen-jing-wang-luo/图2.gif","4701e6ea55b7327f4e6483a748d2d7e9"],["/2022/07/18/shen-du-xue-xi-2-juan-ji-shen-jing-wang-luo/图3.gif","d2aa9320e2b5356c1f89c4cf846adf14"],["/2022/07/18/shen-du-xue-xi-2-juan-ji-shen-jing-wang-luo/图4.jpg","ea751dedc4be63f3351f8a58b5f4210a"],["/2022/07/18/shen-du-xue-xi-2-juan-ji-shen-jing-wang-luo/图5.png","08844247531c3e6a7eda411d9f6da419"],["/2022/07/18/shen-du-xue-xi-2-juan-ji-shen-jing-wang-luo/图6.png","290f8bc48967054e09ae2513f962242f"],["/2022/07/18/shen-du-xue-xi-2-juan-ji-shen-jing-wang-luo/图7.jpg","6e56deea5495b56cd3e57dffa765947f"],["/2022/07/18/shen-du-xue-xi-2-juan-ji-shen-jing-wang-luo/图8.png","44d1f5c3b572a53ff2ea7dc77ef7f51e"],["/2022/07/18/shen-du-xue-xi-2-juan-ji-shen-jing-wang-luo/图9.png","6d7360c0d100ba6aa466d351204da66c"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/index.html","47bbe8a6e6524be27857d2eabbde951a"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图1.png","15ab6414bd71fd199eb056d609a886d7"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图10.png","ed1afb32e31abd43bd4d7bf280f03462"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图11.png","bff9d4e40ba4b4b39269bc22153abfee"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图12.png","37179e484d0f8d0de541fdb9039ae148"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图13.png","35b4876287660dffd20a1254b1a33117"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图14.png","569c73ac17a05ced049281cef6b3ded3"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图15.png","91c40cb6c70eaeb167aa8047d388e762"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图16.png","0f4121f7f1b487d7ed06d637a10f0caa"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图17.png","ed50eef4a95aea306acce5702e6e4e23"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图18.png","52def2ad4e28215e2d08995d5f66f75d"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图19.png","8fcd09337f53f64ea39db8fc9ce434af"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图2.png","877f10e9cdb262e5fb9b82f035f80c9b"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图20.png","ccc9810f697f96f9f49a777f556eb34d"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图21.png","9e010512032c030204802c8e0957b207"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图3.png","687a627b3f823c0c084f46133735713b"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图4.png","ebf87d5429e364c8b300dc8a7d50fed0"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图5.png","9741a409658982efa0005c49b11595b9"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图6.png","3b8ba4f52029d844829ffb6509146a11"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图7.png","8e032f5c41861634a9d7ad6d18058405"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图8.png","26bdf8ce695883183f5be8b1bb126afb"],["/2022/07/19/shen-du-xue-xi-3-xun-huan-shen-jing-wang-luo/图9.png","7ee0b138cfcb8beb3b9b169947b8f095"],["/2022/09/08/wu-zi-qi-ai-yi/index.html","f37e3a46d111171a733f7d83be4c1ec1"],["/2022/09/08/wu-zi-qi-ai-yi/图1.png","06a551b1b58cfa63e34247b2bde87be3"],["/2022/09/08/wu-zi-qi-ai-yi/图2.png","9a339d1cddc50b7a1b2dc1fdfc7e82d9"],["/2022/09/08/wu-zi-qi-ai-yi/图3.png","af9b21e0b42ab67bd444269f3b6390b5"],["/2022/09/13/wu-zi-qi-ai-er/index.html","c127af52ab4743ae13451536fccda777"],["/2022/09/13/wu-zi-qi-ai-er/图1.jpg","37127367073d5bb5bc497b4741ea35bd"],["/2022/09/13/wu-zi-qi-ai-er/图10.jpg","3b362b1d49535c49ea9f14206e15cf47"],["/2022/09/13/wu-zi-qi-ai-er/图11.jpg","7ede49e68a370e624dccc0f65c682a8e"],["/2022/09/13/wu-zi-qi-ai-er/图12.jpg","b4e2977ac83f1a36d5cd3add1f28b348"],["/2022/09/13/wu-zi-qi-ai-er/图13.jpg","e82208e04c7c7de2cef41a286e0e6f59"],["/2022/09/13/wu-zi-qi-ai-er/图14.jpg","3d00e5cb578b3085f347802ed4a884c7"],["/2022/09/13/wu-zi-qi-ai-er/图15.jpg","9dd752872ac8a9f43abd2988be1fdd51"],["/2022/09/13/wu-zi-qi-ai-er/图16.jpg","c93238759feed28f4758058458ffcf2e"],["/2022/09/13/wu-zi-qi-ai-er/图17.jpg","7cb7288b357501171b6a49dd36b51111"],["/2022/09/13/wu-zi-qi-ai-er/图18.jpg","095718b84d472b2e9ac0c23d6abbaa81"],["/2022/09/13/wu-zi-qi-ai-er/图19.jpg","47fdcc1a87cf011522bf41d369d8a3c8"],["/2022/09/13/wu-zi-qi-ai-er/图2.jpg","5d777247902b85ba8310ff25673f5652"],["/2022/09/13/wu-zi-qi-ai-er/图20.jpg","39b8a486042b4decedfe3e5a54653301"],["/2022/09/13/wu-zi-qi-ai-er/图21.png","79edff19aeba09bead99d18c5032d158"],["/2022/09/13/wu-zi-qi-ai-er/图22.png","195510fd40347c61a18ff70942044313"],["/2022/09/13/wu-zi-qi-ai-er/图3.jpg","256d154c89af2ae8653a21ca20780e17"],["/2022/09/13/wu-zi-qi-ai-er/图4.jpg","75175bbd2e7e8ed6adeed90e89e8a743"],["/2022/09/13/wu-zi-qi-ai-er/图5.jpg","515073388e1447583cf16222e2ca1f6b"],["/2022/09/13/wu-zi-qi-ai-er/图6.jpg","55d5df1bf93318fdefb8745440fddd5d"],["/2022/09/13/wu-zi-qi-ai-er/图7.jpg","f486b0886a33ad0d282b33f767fa8761"],["/2022/09/13/wu-zi-qi-ai-er/图8.jpg","24dcbcd126b76b90776fa87fd9206a97"],["/2022/09/13/wu-zi-qi-ai-er/图9.jpg","d81315db26ba6be9d47d4c68e0fe6b9d"],["/2022/09/17/wu-zi-qi-ai-san/index.html","c8a1395789107aeddff5306b3abed0d8"],["/2022/09/17/wu-zi-qi-ai-san/图1.png","06efa26d683340baf0d2d9a36fae17cb"],["/2022/09/17/wu-zi-qi-ai-san/图2.png","24cd317cbf9737c33b4d3bd1c5df7a02"],["/2022/09/17/wu-zi-qi-ai-san/图3.png","ff19dcf89efd1b05fb073c9d958a8d31"],["/2022/09/17/wu-zi-qi-ai-san/图4.png","b5f145264c63cf26c1de9cf9b8936778"],["/2022/09/17/wu-zi-qi-ai-san/图5.png","8573ba2d478d72ce69b19c189dfdffbf"],["/2022/09/17/wu-zi-qi-ai-san/图6.png","49c42777a71aa914f3c10eb065a58214"],["/2022/09/17/wu-zi-qi-ai-san/图7.png","93c964d2481af6b6fae1220bce6c9949"],["/2022/09/17/wu-zi-qi-ai-san/图8.png","93c964d2481af6b6fae1220bce6c9949"],["/2022/11/12/hong-hei-shu/index.html","e97e661054dfd655b97cba1327744f6e"],["/2022/11/12/hong-hei-shu/图1.png","de84e62cdd5376b84feae3d1f991d498"],["/2022/11/12/hong-hei-shu/图10.png","d33a5444026e0d71a8d03b29767fd5bf"],["/2022/11/12/hong-hei-shu/图11.png","8208c944525354257db8f28ed7c1d06d"],["/2022/11/12/hong-hei-shu/图12.png","3deca392cb52f3a3ab39d68bf0c46b15"],["/2022/11/12/hong-hei-shu/图13.png","09dabd33d68a3016eb80fe20a869806e"],["/2022/11/12/hong-hei-shu/图14.png","0b07291073f6acfcc2e4496d3063c220"],["/2022/11/12/hong-hei-shu/图15.png","2dcb56daa95ba73ab4c1d4f479a8c49c"],["/2022/11/12/hong-hei-shu/图16.png","cb12f096e416322abeced8646b1b7773"],["/2022/11/12/hong-hei-shu/图17.png","4a5df0a38de6bfd2ea3f18b8dd26e365"],["/2022/11/12/hong-hei-shu/图18.gif","591b2b8b5dece5da4936d823a07a3f39"],["/2022/11/12/hong-hei-shu/图19.gif","772eb4f59b7f5ba6da045f220a506d04"],["/2022/11/12/hong-hei-shu/图2.png","ae70786cbb1217757920dffb083f2f5f"],["/2022/11/12/hong-hei-shu/图20.png","e448d10c563f029619d7f663feb91920"],["/2022/11/12/hong-hei-shu/图21.png","abb08f592e21f40a69cac9837c3da89d"],["/2022/11/12/hong-hei-shu/图22.png","6251e6f06b21a0f7f5c9da1691f08300"],["/2022/11/12/hong-hei-shu/图23.png","0e7c1fadb45b63318cfac0f83926d304"],["/2022/11/12/hong-hei-shu/图24.png","069c782fed514ade7e70505254f1ec28"],["/2022/11/12/hong-hei-shu/图25.png","6d86e5969d1dc5578b227e38185d42c1"],["/2022/11/12/hong-hei-shu/图3.png","28cc4e3dfcb57cf77360e4569c94121e"],["/2022/11/12/hong-hei-shu/图4.png","8f2d1819376ff7b14872c551b9e7e042"],["/2022/11/12/hong-hei-shu/图5.png","cf435b040c9fa25fe6b87a81a42da659"],["/2022/11/12/hong-hei-shu/图6.png","65d8499514418a2fb444d327db0a5605"],["/2022/11/12/hong-hei-shu/图7.png","40fa1b1bc2ad4afbb28d97075cc2d604"],["/2022/11/12/hong-hei-shu/图8.png","6d07b87a2ab38f3f5b17721f756e8a49"],["/2022/11/12/hong-hei-shu/图9.png","fd9802a8395ff7f818b94355e254e381"],["/2022/11/14/san-lie-biao/index.html","4f4f5c0ba5a2d3ec5a18251c7f0777bd"],["/2022/11/14/san-lie-biao/图1.png","7bb93118a782a34b01c22e9aac633db3"],["/2022/11/14/san-lie-biao/图10.png","89b499846b7ca474a1179c9acc0fa6c1"],["/2022/11/14/san-lie-biao/图11.png","88c6140658c78072f3056f71f6b25fef"],["/2022/11/14/san-lie-biao/图12.png","bf7008ba8ce7bfa72ddc904206d3c8a7"],["/2022/11/14/san-lie-biao/图13.png","d052b3da1347d703b8bb6df85e6867b6"],["/2022/11/14/san-lie-biao/图2.png","bab90ca597b31430df71c044b7f6e792"],["/2022/11/14/san-lie-biao/图3.png","b19aa834e850ab0b8e0f52ace1510dc4"],["/2022/11/14/san-lie-biao/图4.png","48c548c13584d768c2a08d61fdc4b6a1"],["/2022/11/14/san-lie-biao/图5.png","f3f64626400a453cbda79c3bc0f27df3"],["/2022/11/14/san-lie-biao/图6.png","b87552f70da856ba070a3343bb7decba"],["/2022/11/14/san-lie-biao/图7.png","98e4780005560c35afb52bbaddf8ec49"],["/2022/11/14/san-lie-biao/图8.png","29bed2c60dd0f43a532964e97b9be886"],["/2022/11/14/san-lie-biao/图9.png","ad6ae7a99860f95345b527f14f2f52c2"],["/2023/09/12/hello-world/index.html","32e540520c73a2986f1f76a29835feae"],["/404/index.html","9583ac321818bb92d87a13eecf43e514"],["/about/index.html","944323d2bec80d656c84441a6e783f8e"],["/archives/2020/11/index.html","a3ffc9d71fc02e7e45b18f4981ade9ee"],["/archives/2020/index.html","0bf37b1c5365958e61ad37cbba945445"],["/archives/2021/11/index.html","e50bbfac761b4fbbd2f413dcbff0bab8"],["/archives/2021/index.html","c26b2dd92d10f36f998b17a61501f663"],["/archives/2022/05/index.html","0afa7041d67e1476d6f96b38713dc692"],["/archives/2022/07/index.html","1b7fc550e0e0b609e27ca76385fc5028"],["/archives/2022/09/index.html","dba6c4d81a2c1f33d32a8b37b2351552"],["/archives/2022/11/index.html","72065df712daaf436109018f267bd39e"],["/archives/2022/index.html","d11b48ea22a0930e81c15f3df2f12f36"],["/archives/2023/09/index.html","3b9074002f57823c14c07ab393e4d3ff"],["/archives/2023/index.html","c9c5d487423969474f60210547b811e6"],["/archives/index.html","ef271e030ca233ead2885eb18af51235"],["/categories/index.html","4b294fc3dd8f3ea1f3949f0f276d20c6"],["/categories/人工智能/index.html","c1d744341dd95faea608aba8113b1749"],["/categories/数据结构/index.html","1017145e63ad3000595a93147c8bf3aa"],["/categories/读书笔记/index.html","21a4adda42c3c8963af68ff0b5933687"],["/contact/index.html","970a535ea3f978167b6d734073ccc7b6"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/dark.css","fa94e3961b7b3c3adec97d8e7558f33c"],["/css/gallery.css","995e260b3cd2e85de9f9892b11239361"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/indexcover.css","56ef28cea24faa1991bf9f599e24187c"],["/css/matery.css","2af070e5a560759f4def3c266ec12070"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/post.css","16f5d4d84047b4390fddbcac1df17b22"],["/css/reward.css","8c7d18c8fa6b0e82cc75a867e7e533da"],["/favicon.png","2ca71047bb0ca648719dae54a994377c"],["/friends/index.html","2bc6c81f6c39613ac772ce7fa1815cf6"],["/index.html","de26bc8250674965b89d37b7cab6793f"],["/js/click_show_text.js","43d426855193478214a7cf71916e3102"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","9f67a1c1ca204dd3257ba7cd883d77fb"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","59e626fe99d31dfded1e674a4089e0c8"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/libs/gitalk/gitalk.css","8476031a633732dff9875feae0890070"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","a3ab93fbc7ee5b343062ac548edd0de4"],["/medias/banner/0.jpg","f6081034fbaf1f2aa0e057cad6ab45ec"],["/medias/banner/1.jpg","ac669fc927093822996b6bfbafc9c3a0"],["/medias/banner/10.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/medias/banner/2.jpg","9d5259c1c229c7b2a7ea813b5246ce26"],["/medias/banner/3.jpg","8c7505b632239a7c4e39f1667c3928b0"],["/medias/banner/4.jpg","86b8effb2e19b0251f53a7dd8869dc8e"],["/medias/banner/5.jpg","306003d8042084347393c395cf75c56d"],["/medias/banner/6.jpg","20ab4226a6dd53793b7c15b55b3803d3"],["/medias/banner/7.jpg","8b4713f78d41f59b3317633fd22da3cd"],["/medias/banner/8.jpg","eadfeeeb7868e4da5969919e46a8a4b2"],["/medias/banner/9.jpg","57d0f6c25930cd465c0af20b82b9cf29"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/medias/featureimages/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/medias/featureimages/12.jpg","df9abf1fa933cee751d211828c35e4f5"],["/medias/featureimages/13.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/featureimages/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/18.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/19.jpg","86258814e4374b85adac9bd8235ad110"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/medias/featureimages/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/medias/featureimages/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/9.jpg","52e8f9aca543d2d4838c14bce33ecee1"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/logo.png","2ca71047bb0ca648719dae54a994377c"],["/medias/reward/alipay.jpg","35bdad71c0bb5d09260c0f7ab2b9722d"],["/medias/reward/wechat.png","b1fced818d86f99e24c3ecc121207612"],["/sw-register.js","3c32357067d4c262804fd8a70d2cd419"],["/tags/2-3树/index.html","9737af32e2fc89a7235371668f68afa3"],["/tags/Min-Max算法/index.html","772a898959d4c6d6753c94febebf97da"],["/tags/index.html","0629db869c38c7087bf140b2ff9464c2"],["/tags/αβ剪枝算法/index.html","33dfd33f66f727e3b43657b5b3548c06"],["/tags/二叉树/index.html","106ddefc5b2d040162c3806d3d5f73f3"],["/tags/五子棋AI/index.html","51d50ae2d7abac99f8425f90edacbfd8"],["/tags/博弈树/index.html","63d02beff96fce385df0fe8cb876a419"],["/tags/哈希表/index.html","7f1aa1fd53d89a7865d7c77c0160873a"],["/tags/图论/index.html","df641d6a0cbcd20ea2739940de54ff88"],["/tags/机器学习/index.html","865aee677bd7bd89b456a25830303dee"],["/tags/树形结构/index.html","0a3cab94aac1d8becf9c289eda53bf85"],["/tags/深度学习/index.html","290fb018f751e57907d0f49f99f45ced"],["/tags/神经网络/index.html","a1d4375ca947a6d325a77b64637b761f"],["/tags/算法/index.html","a2f2f3f9f15eaf847ad5ccc9dcb8cda6"],["/tags/红黑树/index.html","e28eb706afbb3df55ef6816ff24c6992"],["/tags/读后感/index.html","d45c8a51d44deb66ddef3ddc0abf9e86"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/npm/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
