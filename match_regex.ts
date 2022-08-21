function main(workbook: ExcelScript.Workbook, text: string, pattern: string, flags: string):string[]{
    let ptn = new RegExp(pattern,flags);
    return text.match(ptn) ?? [];
}