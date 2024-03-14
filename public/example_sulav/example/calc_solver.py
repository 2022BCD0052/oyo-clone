
def base_list(expression_list):
    operator, left, right = expression_list
    return list((left, operator, right))


def convertor(operation_list):
    intermediate_result = base_list(operation_list)
    for index, item in enumerate(intermediate_result):
        if isinstance(item, list):
            intermediate_result[index] = convertor(item)

    return intermediate_result


def solver(operation):
    result = ''
    replacer = {
        '[': '(',
        ']': ')'
    }
    converted_list = convertor(operation_list=operation)
    string_list = str(converted_list)
    for item in string_list:
        if new_item := replacer.get(item, None):
            result += new_item
        elif item in [',', "'"]:
            continue
        else:
            result += item
    return result
