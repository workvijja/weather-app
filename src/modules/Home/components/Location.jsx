import {Button} from "@/components/ui/button";
import {Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover"
import {Check, MapPin} from "lucide-react"
import {useAtom} from "jotai";
import {useState} from "react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {cn} from "@/lib/utils.js";
import {citiesAtom, searchCityAtom, selectedCityAtom} from "@/modules/Home/atoms";

const location = () => {
    const [searchCity, setSearchCity] = useAtom(searchCityAtom)
    const [{data, isPending, error}] = useAtom(citiesAtom)
    const [open, setOpen] = useState(false)
    const [{name}, setCity] = useAtom(selectedCityAtom)

    const handleSearch = (v) => setSearchCity(v)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant={"ghost"} role="combobox" aria-expanded={open} className={"w-[200px]"}>
                    <MapPin className="mr-2 h-4 w-4" /> <span className={"truncate"}>{name ?? "City"}</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className={"w-[200px] p-0"}>
                <Command shouldFilter={false}>
                    <CommandInput value={searchCity} onValueChange={handleSearch} placeholder="Search city..." />
                    <CommandList>
                        <CommandEmpty>{isPending ? "Loading..." : "No city found."}</CommandEmpty>
                        <CommandGroup>
                        {
                            data.map((c, i) => (
                                <CommandItem
                                    key={i}
                                    value={c.name}
                                    onSelect={(currentValue) => {
                                        console.log(currentValue)
                                        setCity(currentValue === name ? {} : c)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            c.name === name ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {c.name}
                                </CommandItem>
                            ))
                        }
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default location