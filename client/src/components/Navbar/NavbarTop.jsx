"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  User,
} from "@nextui-org/react";
import { HiMiniUserCircle } from "react-icons/hi2";

const menuItems = ["Nosotros", "Contacto", "Ayuda"];

export const NavbarTop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <div className="relative">
            <section className="flex text-4xl font-bold uppercase">
              <p>boomer</p>
              <Image src="/images/logo.png" width={50} height={50} alt="logo" />
              <p>ng</p>
            </section>
            <p className="absolute right-0 top-8  justify-end font-bold">P2P</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          {menuItems.map((item, index) => (
            <Link
              key={`${item}-${index}`}
              href="#"
              className="ml-4 text-xl font-semibold"
            >
              {item}
            </Link>
          ))}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden" justify="end">
        <NavbarItem className="flex items-center">
          <Avatar
            classNames={{ base: "bg-white text-[#0F9547]" }}
            icon={<HiMiniUserCircle size={40} />}
            size="xl"
          />
          <p className="h-[100px] pl-3  flex items-center text-lg font-semibold">
            ¡Hola Marcela!
          </p>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu className="w-full">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="text-xl font-semibold hover:bg-slate-500 p-2 rounded-lg"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
