import DataHelper from './DataHelper'
import ItemData from './../model/ItemData'
class ActionHelper {
    // 负责数据处理
    dataHelper: DataHelper = new DataHelper('memoData', 'id');
    // 笔记数组
    memoList: Array<ItemData>;
    constructor() {
        this.memoList = this.readData()
    }
    // 读取本地数据，并返回ItemData对象
    readData(): Array<ItemData> {
        let arrObj = this.dataHelper.reaData()
        let arrItem = arrObj.map((ele: any) => {
            let item: ItemData = new ItemData()
            item.id = ele.id
            item.categoryId = ele.categoryId
            item.title = ele.title
            item.content = ele.content
            item.createTime = ele.createTime
            return item
        })
        return arrItem
    }
    // 新增笔记
    addItem(item: ItemData): number {
        item.id = this.dataHelper.addData(item)
        this.memoList.push(item)
        this.dataHelper.saveData(this.memoList)
        return item.id
    }
    // 编辑
    edit(item: ItemData): void {
        // 找出数数组中id相同的
        let index: number = this.memoList.findIndex((ele) => {
            return item.id === ele.id
        })
        // 修改对象的值，将传入对象的item的各个属性的值，覆盖设置给数组中找到的对象属性
        if (index !== -1) {
          this.memoList[index] = item
        }
        // 将更新后的数组重新保存到本地localstorage
        this.dataHelper.saveData(this.memoList)
    }
    // 删除
    delete (id: number):void {
        // 根据id找下标
        let index: number = this.memoList.findIndex((ele) => {
            return id === ele.id
        })

        // 根据下标，删除对象
        if (index !== -1) {
            this.memoList.splice(index, 1)
            // 重新保存到本地
            this.dataHelper.saveData(this.memoList)
        }
    }
}
export default ActionHelper