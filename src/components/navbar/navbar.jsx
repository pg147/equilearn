"use client"

import * as React from "react"
import Link from "next/link"
import { dropdownMenu } from "./dropdownMenuData"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
    return (
        <div className="flex justify-around max-h-fit max-w-full bg-white pt-6">
            {/* Equilearn Logo would be placed here */}
            <div id="brand" className="h-16 w-16 rounded-full bg-black">

            </div>

            {/* Navigation items */}
            <div id="nav-items">
                <NavigationMenu>
                    <NavigationMenuList>

                        {/* About us */}
                        <NavigationMenuItem className="px-2">
                            <Link href="#" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    About us
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        {/* Courses Dropdown */}
                        <NavigationMenuItem className="px-2">
                            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {dropdownMenu.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Talent Pool */}
                        <NavigationMenuItem className="px-2">
                            <Link href="#" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Talent Pool
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        {/* Searchfield */}
                        <NavigationMenuItem className="px-2">
                            <div className="flex w-full max-w-sm items-center space-x-2">
                                <Input type="search" placeholder="Search for your best courses, docs, etc." />
                                <Button type="submit">Search</Button>
                            </div>
                        </NavigationMenuItem>
                        
                        {/* User Avatar */}
                        <div>
                            <NavigationMenuItem className="ml-4">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </NavigationMenuItem>
                        </div>

                    </NavigationMenuList>

                </NavigationMenu>
            </div>
        </div>
    );
}


// Framework's code for Dropdown Menu Items (DONT CHANGE OR ALTER)
const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"