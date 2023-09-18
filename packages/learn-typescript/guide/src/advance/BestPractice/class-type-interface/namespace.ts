/// <reference path="other.ts" />
/**
 * namespace合并策略:
 *  1.同名属性，后边的会覆盖前边的
 */
namespace CTIDiff {

}

namespace CTIDiff {
    console.log("name:", CTIDiff.name)
}