import Category from './CateEnum'
class ItemData{
    id!: number;
    categoryId!: Category;
    title!: string;
    content!: string;
    createTime!: string;
    constructor (id: number = -1, categoryId: Category = -1, title: string = '', content: string = '') {
        this.id = id
        this.categoryId = categoryId
        this.title = title
        this.content = content
        this.createTime = this.toStringData(Date.now())
    }
    toStringData (timeSpan: number): string {
        let date = new Date(timeSpan)
        let str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay()
        str = str + ' ' + date.getHours() + ':' + date.getSeconds() + ':' + date.getMinutes()
        return str
    }
}
export default ItemData