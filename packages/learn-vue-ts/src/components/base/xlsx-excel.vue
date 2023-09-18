<template>
    <div>
        <button @click="_export">导出</button>
    </div>
</template>

<script>
    import XLSX from 'xlsx';

    export default {
        data() {
            return {
                json: [
                    {"province": "广东省", "city": "湛江市", "district": "坡头区"},
                    {"province": "广东省", "city": "湛江市", "district": "麻章区"},
                    {"province": "广东省", "city": "湛江市", "district": "遂溪县"},
                    {"province": "广东省", "city": "湛江市", "district": "徐闻县"},
                    {"province": "广东省", "city": "湛江市", "district": "廉江市"},
                    {"province": "广东省", "city": "湛江市", "district": "雷州市"},
                    {"province": "广东省", "city": "湛江市", "district": "吴川市"},
                    {"province": "广东省", "city": "茂名市", "district": "茂南区"}
                ],
                d: []
            };
        },
        mounted() {
            let d = [['省', '市', '区县']];
            this.json.forEach((val, idx, array) => {
                d[idx + 1] = [];
                d[idx + 1][0] = val['province'];
                d[idx + 1][1] = val['city'];
                d[idx + 1][2] = val['district'];
            });

            this.d = d;
        },
        methods: {
            _export(evt) {
                const ws = XLSX.utils.aoa_to_sheet(this.d);
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
                XLSX.writeFile(wb, "导出报表.xlsx");
            },
        }
    };
</script>