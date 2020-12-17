import ItemData from '@/model/ItemData';

// DataHelper类，负责localstorage操作
class DataHelper {
    dataKey: string;
    primaryKey: string;
    // 构造函数，为对象添加各种属性
    constructor (dataKey: string, primaryKey: string) {
        this.dataKey = dataKey
        this.primaryKey = primaryKey
    }
    // 读取数据，返回数组
    reaData (): any {
        // 读取本地数据
        let stoData: string | null = localStorage.getItem(this.dataKey)
        // 将读取的json字符串转化成数组对象
        let arrData: any = []
        if (stoData !== null) {
            arrData = JSON.parse(stoData)
        }
        return arrData
    }
    // 输入存入本地
    saveData (arrData: Array<object>): void {
        let str: string = JSON.stringify(arrData)        
        localStorage.setItem(this.dataKey, str)
    }
    // 新增数据
    addData(newData: any): number {
        let dataArray = this.reaData()
        if (dataArray === null) {
            dataArray = []
        }
        // 自动生成主键值        
        let newId = dataArray.length > 0 ? dataArray[dataArray.length - 1][this.primaryKey] + 1 : 1
        newData[this.primaryKey] = newId
        dataArray.push(newData)
        this.saveData(dataArray)
        return newId
    }
    // 移除元素
    removeData(id: string | number): boolean {
        let arr = this.reaData()
        let index = arr.findIndex((ele: any) => {
            return +ele[this.primaryKey] === +id
        })
        if (index > -1) {
            arr.splice(index, 1)
            this.saveData(arr)
            return true
        }
        return false
    }
}
export default DataHelper