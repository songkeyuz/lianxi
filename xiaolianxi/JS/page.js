//分页
var userTable = document.getElementById("userTable");
var pageTable = userTable.getElementsByTagName("tbody")[0];
var spanFirst = document.getElementById("spanFirst");
var spanPre = document.getElementById("spanPre");
var spanNext = document.getElementById("spanNext");
var spanLast = document.getElementById("spanLast");
var pageNum = document.getElementById("spanPageNum");
var totalPage = document.getElementById("spanTotalPage");

var numberRowsInTable = pageTable.rows.length;
var pageSize = 4;
var page = 1;

//下一页
function next() {
    hideTable();
    currentRow = pageSize * page;
    maxRow = currentRow + pageSize;
    if (maxRow > numberRowsInTable)
        maxRow = numberRowsInTable;
    for (var i = currentRow; i < maxRow; i++) {
        pageTable.rows[i].style.display = '';
    }
    page++;
    if (maxRow == numberRowsInTable) {
        nextText();
        lastText();
    }
    showPage();
    preLink();
    firstLink();
};
//上一页
function pre() {
    hideTable();
    page--;
    currentRow = pageSize * page;
    maxRow = currentRow - pageSize;
    if (currentRow > numberRowsInTable) currentRow = numberRowsInTable;
    for (var i = maxRow; i < currentRow; i++) {
        pageTable.rows[i].style.display = '';
    }
    if (maxRow == 0) {
        preText();
        firstText();
    }
    showPage();
    nextLink();
    lastLink();
};

//第一页
function first() {
    hideTable();
    page = 1;
    for (var i = 0; i < pageSize; i++) {
        pageTable.rows[i].style.display = '';
    }
    showPage();
    preText();
    nextLink();
    lastLink();
};

//最后一页
function last() {
    hideTable();
    page = pageCount();
    currentRow = pageSize * (page - 1);
    for (var i = currentRow; i < numberRowsInTable; i++) {
        pageTable.rows[i].style.display = '';
    }
    showPage();
    preLink();
    nextText();
    firstLink();
};

function hideTable() {
    for (var i = 0; i < numberRowsInTable; i++) {
        pageTable.rows[i].style.display = 'none';
    }
};

function showPage() {
    pageNum.innerHTML = page;
};

//总共页数
function pageCount() {
    var count = 0;
    if (numberRowsInTable % pageSize != 0) count = 1;
    return parseInt(numberRowsInTable / pageSize) + count;
};
//显示链接
function preLink() {
    spanPre.innerHTML = "<a href='javascript:pre();'>上一页</a>";
};

function preText() {
    spanPre.innerHTML = "上一页";
};

function nextLink() {
    spanNext.innerHTML = "<a href='javascript:next();'>下一页</a>";
};

function nextText() {
    spanNext.innerHTML = "下一页";
};

function firstLink() {
    spanFirst.innerHTML = "<a href='javascript:first();'>第一页</a>";
};

function firstText() {
    spanFirst.innerHTML = "第一页";
};

function lastLink() {
    spanLast.innerHTML = "<a href='javascript:last();'>最后一页</a>";
};

function lastText() {
    spanLast.innerHTML = "最后一页";
};
//隐藏表格
function hide() {
    for (var i = pageSize; i < numberRowsInTable; i++) {
        pageTable.rows[i].style.display = 'none';
    }

    totalPage.innerHTML = pageCount();
    pageNum.innerHTML = '1';

    nextLink();
    lastLink();
};
hide();