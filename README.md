# json2excel-js

It helps export to excel, using column as Array or Object.

The original porpose of it, is to help people who need to solve a problem bellow:

fields you sent:

fields: {
'label': 'Information title',
2019: 'information',
2020: 'information'
}

# P.S - The rows' orders doesnt matter

data: {
2019: 'information row',
2020: 'information row'
label: 'information row',
}

But the Object put Integer first, String at last. It's Sucks...

So, Why do not use Array ? Cuz sometimes i needn't repeat the same information at Object Keys and Values.
therefore, now if you send:

fields: ["label", 2019, 2020]; <-- it will stay the same.

data: {
2019: 'information row',
2020: 'information row'
label: 'information row',
}

PS. the props 'fields' Accept Object and Array.

Well, solved my problem, hope it help u too.

# How to Use

# import the package

import downloadExcel from 'json2excel-js';

# add on your components object

components: {
downloadExcel
}

# Vue Page

<download-excel
class="btn btn-default" # Class is optional
:data="content.data" # data must be an Array of Objects
:fields="translatedFields" # Array or Object
:worksheet="tableName" # Name of your worksheet
:name="`${tableName}.xls`" # Filename

>

    <-- Here is your custom button -->
                    <a
                        class="btn btn-sm btn-dark text-white"
                        style="cursor: pointer"
                        :title="$t('Exportar Para Excel')"
                    >
                        <i class="fa fa-download"></i>
                    </a>
    <-- Be happy, good code -->

</download-excel>
