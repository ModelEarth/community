import sys
import json

k_mapping = {
    "OF_ID": "type",
    "FMID": "type",
    "marketname": "name",
    "MarketName": "name",
    "Location_City": "city",
    "city": "city",
    "Location_ST": "street",
    "street": "street",
    "Location_State": "state",
    "State": "state",
    "Location_Zip": "zip",
    "zip": "zip",
    "Market_Website": "website",
    "Website": "website",
    "Market_Facebook": "facebook",
    "Facebook": "facebook",
    "Market_Twitter": "twitter",
    "Twitter": "twitter",
    "x": "x",
    "y": "y",
    "Organic": "tags",
    "Bakedgoods": "tags",
    "Cheese": "tags",
    "Crafts": "tags",
    "Flowers": "tags",
    "Eggs": "tags",
    "Seafood": "tags",
    "Herbs": "tags",
    "Vegetables": "tags",
    "Honey": "tags",
    "Jams": "tags",
    "Maple": "tags",
    "Meat": "tags",
    "Nursery": "tags",
    "Nuts": "tags",
    "Plants": "tags",
    "Poultry": "tags",
    "Prepared": "tags",
    "Soap": "tags",
    "Trees": "tags",
    "Wine": "tags",
    "Coffee": "tags",
    "Beans": "tags",
    "Fruits": "tags",
    "Grains": "tags",
    "Juices": "tags",
    "Mushrooms": "tags",
    "PetFood": "tags",
    "Tofu": "tags",
    "WildHarvested": "tags",
    "Product_1": "tags",
    "Product_2": "tags",
    "Product_3": "tags",
    "Product_4": "tags",
    "Product_5": "tags",
    "Product_6": "tags",
    "Product_7": "tags",
    "Product_8": "tags",
    "Product_9": "tags",
    "Product_10": "tags",
    "Product_11": "tags",
    "Product_12": "tags",
    "Product_13": "tags",
    "Product_14": "tags",
    "Product_15": "tags",
    "Product_16": "tags",
    "Product_17": "tags",
    "Product_18": "tags",
    "Product_19": "tags",
    "Product_20": "tags",
    "Product_21": "tags",
    "Product_22": "tags",
    "Product_23": "tags",
    "Product_24": "tags",
    "Product_25": "tags",
    "Product_26": "tags",
    "Product_27": "tags",
    "Product_28": "tags"
}


def v_mapping_func(map):
    def func(x):
        if x in map:
            return map[x]
        else:
            return False
    return func


v_mapping = {
    "FMID": lambda x: "market",
    "OF_ID": lambda x: "farm",
    "Organic": v_mapping_func({"Y": "organic"}),
    "Bakedgoods": v_mapping_func({"Y": "baked goods"}),
    "Cheese": v_mapping_func({"Y": "cheese"}),
    "Crafts": v_mapping_func({"Y": "crafts"}),
    "Flowers": v_mapping_func({"Y": "flowers"}),
    "Eggs": v_mapping_func({"Y": "eggs"}),
    "Seafood": v_mapping_func({"Y": "seafood"}),
    "Herbs": v_mapping_func({"Y": "herbs"}),
    "Vegetables": v_mapping_func({"Y": "vegetables"}),
    "Honey": v_mapping_func({"Y": "honey"}),
    "Jams": v_mapping_func({"Y": "jams"}),
    "Maple": v_mapping_func({"Y": "maple"}),
    "Meat": v_mapping_func({"Y": "meat"}),
    "Nursery": v_mapping_func({"Y": "nursery"}),
    "Nuts": v_mapping_func({"Y": "nuts"}),
    "Plants": v_mapping_func({"Y": "plants"}),
    "Poultry": v_mapping_func({"Y": "poultry"}),
    "Prepared": v_mapping_func({"Y": "prepared"}),
    "Soap": v_mapping_func({"Y": "soap"}),
    "Trees": v_mapping_func({"Y": "trees"}),
    "Wine": v_mapping_func({"Y": "wine"}),
    "Coffee": v_mapping_func({"Y": "coffee"}),
    "Beans": v_mapping_func({"Y": "beans"}),
    "Fruits": v_mapping_func({"Y": "fruits"}),
    "Grains": v_mapping_func({"Y": "grains"}),
    "Juices": v_mapping_func({"Y": "juices"}),
    "Mushrooms": v_mapping_func({"Y": "mushrooms"}),
    "PetFood": v_mapping_func({"Y": "pet food"}),
    "Tofu": v_mapping_func({"Y": "tofu"}),
    "WildHarvested": v_mapping_func({"Y": "wild"}),
    "Product_1": v_mapping_func({"1": "baked-goods"}),
    "Product_2": v_mapping_func({"1": "bedding plants"}),
    "Product_3": v_mapping_func({"1": "canned preserved"}),
    "Product_4": v_mapping_func({"1": "coffee tea"}),
    "Product_5": v_mapping_func({"1": "crafts woodworking"}),
    "Product_6": v_mapping_func({"1": "cut-flowers"}),
    "Product_7": v_mapping_func({"1": "dairy products"}),
    "Product_8": v_mapping_func({"1": "dry beans"}),
    "Product_9": v_mapping_func({"1": "eggs"}),
    "Product_10": v_mapping_func({"1": "fish seafood"}),
    "Product_11": v_mapping_func({"1": "herbs"}),
    "Product_12": v_mapping_func({"1": "fresh-fruits"}),
    "Product_13": v_mapping_func({"1": "fresh-vegetables"}),
    "Product_14": v_mapping_func({"1": "grains flour"}),
    "Product_15": v_mapping_func({"1": "honey"}),
    "Product_16": v_mapping_func({"1": "juices ciders"}),
    "Product_17": v_mapping_func({"1": "maple-products"}),
    "Product_18": v_mapping_func({"1": "mushrooms"}),
    "Product_19": v_mapping_func({"1": "nursery-stock"}),
    "Product_20": v_mapping_func({"1": "nuts"}),
    "Product_21": v_mapping_func({"1": "pet-food"}),
    "Product_22": v_mapping_func({"1": "poultry fowl"}),
    "Product_23": v_mapping_func({"1": "prepared foods"}),
    "Product_24": v_mapping_func({"1": "red-meat non-poultry-meat"}),
    "Product_25": v_mapping_func({"1": "soap body-care"}),
    "Product_26": v_mapping_func({"1": "tofu non-animal protein"}),
    "Product_27": v_mapping_func({"1": "wild-harvested forest-products"}),
    "Product_28": v_mapping_func({"1": "wine spirits beer hard-cider"})
}


def transform_k(k, v):
    if k in k_mapping:
        return k_mapping[k]
    else:
        return False


def transform_v(k, v):
    if k in v_mapping:
        return v_mapping[k](v)
    else:
        return v


def canonicalize(obj):
    tags = []
    result = {}
    for k, v in obj.items():
        new_k = transform_k(k, v)
        new_v = transform_v(k, v)
        if new_k != False and new_v != False:
            if new_k == "tags":
                tags.append(new_v)
            else:
                result[new_k] = new_v

    result["tags"] = " ".join(tags)
    return result


infile = sys.argv[1]
result = []

with open(infile, "r") as input:
    markets = json.loads(str(input.read()))
    for market in markets:
        result.append(canonicalize(market))

print(json.dumps(result, ensure_ascii=True))
