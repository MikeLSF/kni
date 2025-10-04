# Script de nettoyage des composants et dépendances non utilises

Write-Host "== Nettoyage des composants UI non utilises ==" -ForegroundColor Green

# Liste des composants UI a GARDER
$keepComponents = @(
    "button",
    "card", 
    "input",
    "textarea",
    "label",
    "toaster",
    "sonner",
    "tooltip",
    "sheet",
    "toast",
    "dialog"  # Necessaire pour sheet
)

# Liste de tous les composants UI trouves
$allComponents = @(
    "accordion",
    "alert-dialog",
    "alert",
    "aspect-ratio",
    "avatar",
    "badge",
    "breadcrumb",
    "calendar",
    "carousel",
    "chart",
    "checkbox",
    "collapsible",
    "command",
    "context-menu",
    "drawer",
    "dropdown-menu",
    "form",
    "hover-card",
    "input-otp",
    "menubar",
    "navigation-menu",
    "pagination",
    "popover",
    "progress",
    "radio-group",
    "resizable",
    "scroll-area",
    "select",
    "separator",
    "sidebar",
    "skeleton",
    "slider",
    "switch",
    "table",
    "tabs",
    "toggle",
    "toggle-group",
    "use-toast"
)

# Supprimer les composants non utilises
foreach ($component in $allComponents) {
    if ($keepComponents -notcontains $component) {
        $filePath = "src/components/ui/$component.tsx"
        if (Test-Path $filePath) {
            Remove-Item $filePath -Force
            Write-Host "  [X] Supprime: $filePath" -ForegroundColor Yellow
        }
    }
}

Write-Host ""
Write-Host "[OK] Nettoyage des composants UI termine!" -ForegroundColor Green

# Liste des dependances potentiellement inutilisees
$unusedDeps = @(
    "@radix-ui/react-accordion",
    "@radix-ui/react-alert-dialog",
    "@radix-ui/react-aspect-ratio",
    "@radix-ui/react-avatar",
    "@radix-ui/react-checkbox",
    "@radix-ui/react-collapsible",
    "@radix-ui/react-context-menu",
    "@radix-ui/react-dropdown-menu",
    "@radix-ui/react-hover-card",
    "@radix-ui/react-menubar",
    "@radix-ui/react-navigation-menu",
    "@radix-ui/react-popover",
    "@radix-ui/react-progress",
    "@radix-ui/react-radio-group",
    "@radix-ui/react-scroll-area",
    "@radix-ui/react-select",
    "@radix-ui/react-separator",
    "@radix-ui/react-slider",
    "@radix-ui/react-switch",
    "@radix-ui/react-tabs",
    "@radix-ui/react-toggle",
    "@radix-ui/react-toggle-group",
    "cmdk",
    "date-fns",
    "embla-carousel-react",
    "input-otp",
    "react-day-picker",
    "react-resizable-panels",
    "recharts",
    "vaul",
    "@tailwindcss/typography"
)

Write-Host ""
Write-Host "== Dependances a desinstaller ==" -ForegroundColor Cyan
foreach ($dep in $unusedDeps) {
    Write-Host "  - $dep" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Pour desinstaller les dependances, executez:" -ForegroundColor Magenta
$uninstallCommand = "npm uninstall " + ($unusedDeps -join " ")
Write-Host $uninstallCommand -ForegroundColor White

Write-Host ""
Write-Host "== Script termine ==" -ForegroundColor Green
